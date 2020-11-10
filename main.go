package main

func main() {}

//export sum
func sum(x, y int) int

//export add1
func add1(x, y int) int {
	return sum(x, y) + 1
}
