public function addToCart(Request $request) {
    Cart::create([
        'user_id' => Auth::id(),
        'pokemon_id' => $request->pokemon_id,
        'name' => $request->name,
        'sprite' => $request->sprite,
        'price' => $request->price,
    ]);
    return response()->json(['success' => 'Pokemon agregado al carrito']);
}

public function checkout() {
    $cart = Cart::where('user_id', Auth::id())->get();
    // Guardar los Pokémon comprados
    foreach ($cart as $item) {
        Purchase::create([
            'user_id' => Auth::id(),
            'pokemon_id' => $item->pokemon_id,
            'name' => $item->name,
            'sprite' => $item->sprite,
            'price' => $item->price,
        ]);
    }
    //Vaciar el carrito
    Cart::where('user_id', Auth::id())->delete();
    return response()->json(['success' => 'Compra realizada']);
}