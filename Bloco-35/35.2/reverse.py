# def reverse(list):
#     reversed_list = []
#     for item in list:
#         reversed_list.insert(0, item)
#     return reversed_list


def reverse(list):
    if len(list) < 2:
        print(list)
        return list
    else:
        print(list[1:])
        print([list[0]])
        return reverse(list[1:]) + [list[0]]


reverse([44, 2, 14, 5])
