import sys
import time

def simple_numbers(count: str):
    if count is None or count == 0:
        return []
    result = []
    index, number = 0, 1
    while index <= count:
        if (number % 1 == 0) and (number % number == 0) and (number % 2 != 0) and (number % 3 != 0):
            result.append(number)
            index += 1
        number += 1
    return result


def func():
    try:
        parameter = sys.argv[1]
    except IndexError:
        return simple_numbers(None)
    
    try:
        parameter = int(parameter)
    except ValueError:
        return simple_numbers(None)
    
    return simple_numbers(parameter)

start = time.time()
print(func())
print(time.time() - start)