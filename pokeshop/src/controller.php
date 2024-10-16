//controller.php
public function register(Request $request) {
    $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => bcrypt($request->password),
    ]);

    return response()->json(['token' => $user->createToken('token')->plainTextToken]);
}

//login
public function login(Request $request) {
    if (Auth::attempt($request->only('email', 'password'))) {
        return response()->json(['token' => Auth::user()->createToken('token')->plainTextToken]);
    }
    return response()->json(['error' => 'Unauthorized'], 401);
}

