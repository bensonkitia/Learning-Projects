# Fizzbuzz Samples

I do the FizzBuzz exercise for every new language I learn.

## Python

    for int in range(1, 100):

        if int % 3 == 0:

            if int % 5 == 0:

                print("Fizzbuzz")

            else:

                print("Fizz")

        elif int % 5 == 0:

            print("Buzz")

        else:

            print(int)

## Javascript

    for (var i = 1; i <= 100; i++) {
        if (i % 3 == 0) {
            if(i % 5 == 0) {
                console.log("Fizzbuzz")
            } else {
                console.log("Fizz")
            }
        } else if (i % 5 == 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }

## Swift

    for number in 1...100 {
        if number % 3 == 0 {
            if number % 5 == 0 {
                print("Fizzbuzz")
            } else {
                print("Fizz")
            }
        } else if number % 5 == 0 {
            print("Buzz")
        } else {
            print(number)
        }
    }
