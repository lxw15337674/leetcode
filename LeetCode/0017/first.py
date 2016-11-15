def letterCombinations(digits):
    """
    :type digits: str
    :rtype: List[str]
    """
    if not digits:return []
    dict = {'2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'}
    Result = ['']
    for a in digits:
        list = []
        for b in dict[a]:
            for d in Result:
                list.append(d + b)
        Result = list
    return Result


if __name__ == '__main__':
    digits = "234"
    letterCombinations(digits)
