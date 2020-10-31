import math
import os
import random
import re
import sys

# Complete the kaprekarNumbers function below.
def kaprekarNumbers(p, q):

    ans =[]
    m=0
    l = list()
    sum_i =0
    for i in range(p,q+1):
       sq = pow(55,2)
       # l = str(sq).split()
      
       d = sq % 10
       sum_i =d
       sq = sq //10
       #sq = 55
       while sq >0:
            print(sum_i,end="\n")

            d = sq % 10
            sum_i = sum_i + pow(d,10)
            sq = sq // 10
            if(sum_i + sq == 55):
              ans.append(55)
              break
    print(ans)          
    print(55 * 55)

if __name__ == '__main__':
    p = int(input())

    q = int(input())

    kaprekarNumbers(p, q)

