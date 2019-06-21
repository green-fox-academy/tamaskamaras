class Fibonacci():

    def fibonacci(self, index = 0):
        if index == 0:
            return 0
        self.index = index
        fib = [1, 1]
        for i in range(self.index + 1):
            fib.append(fib[i] + fib[i + 1])
        return fib[index - 1]
