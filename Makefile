all: run

run: lib.wasm
	@node index.js

lib.wasm: main.go
	tinygo build -o lib.wasm -target wasm ./main.go
