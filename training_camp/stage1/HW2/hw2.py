# 要求一 : 函式與流程控制
# 完成以下函式，在函式中 使用迴圈 計算最小值到最大值之間，所有整數的總和。
def calculate(min,max):
    sum = 0
    for i in range(max - min + 1):
        sum = sum + min + i
    return sum
print(calculate(1,3)) # 6
print(calculate(4,8)) # 30

# 要求二：Python 字典與列表、JavaScript 物件與陣列
# 完成以下函式，正確計算出員工的平均薪資，請考慮員工數量會變動的情況。
def avg(data):
    return sum([data["employees"][i]["salary"] for i in range(data["count"])]) / data["count"]
print(avg({
    "count":3,
    "employees":[
        {
            "name":"John",
            "salary":30000
        },
        {
            "name":"Bob",
            "salary":60000
        },
        {
            "name":"Jenny",
            "salary":50000
        }
    ]
}))

# 要求三：演算法
# 找出至少包含兩筆整數的列表 (Python) 或陣列 (JavaScript) 中，兩兩數字相乘後的最大值。
def maxProduct(nums):
    if len(nums) == 2:
        return nums[0] * nums[1]
    else:
        # bubble sort
        for i in range(len(nums) - 1, 0, -1):
            flag = False # 檢查有無交換位置
            for j in range(len(nums) - 1):
                if nums[j] > nums[j+1]:
                    temp = nums[j]
                    nums[j] = nums[j+1]
                    nums[j+1] = temp
                    flag = True
            if flag == False:
                return max(nums[0] * nums[1], nums[-1] * nums[-2]) # 因為可能有負數，故將最大的兩個、最小的兩個數字相乘，再取最大值
        return max(nums[0] * nums[1], nums[-1] * nums[-2])
print(maxProduct([5, 20, 2, 6])) # 得到 120 因為 20 和 6 相乘得到最大值
print(maxProduct([10, -20, 0, 3])) # 得到 30 因為 10 和 3 相乘得到最大值

# 要求四 ( 請閱讀英文 )：演算法
# Given an array of integers, show indices of the two numbers such that they add up to a
# specific target. You can assume that each input would have exactly one solution, and you
# can not use the same element twice.
def twoSum(nums, target):
    for i in range(len(nums) - 1):
        if target - nums[i] in [number for number in nums if nums.index(number) != i]:
            return [nums.index(nums[i]), nums.index(target - nums[i])]
    return "not found"
result=twoSum([2, 11, 7, 15], 9)
print(result) # show [0, 2] because nums[0]+nums[2] is 9

# 要求五 ( Optional )：演算法
# 給定只會包含 0 或 1 兩種數字的列表 (Python) 或陣列 (JavaScript)，計算連續出現 0 的最大
# 長度。

def maxZeros(nums):
    return len(max("".join([str(i) for i in nums]).split("1"))) # 將 list 裡的數字合併成字串，再切割比較長度
print(maxZeros([0, 1, 0, 0])) # 得到 2
print(maxZeros([1, 0, 0, 0, 0, 1, 0, 1, 0, 0])) # 得到 4
print(maxZeros([1, 1, 1, 1, 1])) # 得到 0
