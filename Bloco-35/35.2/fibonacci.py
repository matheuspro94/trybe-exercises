# def fibonacci(n):
#     sequence = [0, 1]
#     for x in range(n):
#         print(sequence[-2])
#         next = sequence[-1] + sequence[-2]
#         sequence.append(next)
#     return sequence[-1]


def fibonacci(n):
    if n < 2:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)


fibonacci(5)
