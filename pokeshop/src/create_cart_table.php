Schema::create('carts', function (Blueprint $table) {
    $table->id();
    $table->foreignId('user_id')->constrained()->onDelete('cascade');
    $table->integer('pokemon_id');
    $table->string('name');
    $table->string('sprite_url')->nullable();
    $table->decimal('price', 10, 2);
    $table->integer('quantity')->default(1);
    $table->timestamps();
});
