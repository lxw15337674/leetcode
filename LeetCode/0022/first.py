def generateParenthesis(n):
    """
    :type n: int
    :rtype: List[str]
    """
    Result = []
    def _generate(pt,left,right):
        if left > right:
            return
        if left == 0 and right ==0:
            Result.append(pt)
            return
        if left>0:
            _generate(pt+'(',left-1,right)
        if right>0:
            _generate(pt+')',left,right-1)
    _generate('',n,n)
    print(Result)

if __name__ == '__main__':
    generateParenthesis(3)