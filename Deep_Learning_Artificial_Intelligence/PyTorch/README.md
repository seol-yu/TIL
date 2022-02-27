Docker

Container-based virtualization system

컨테이너 기반의 가상화 시스템

<br />

---

<br />

Docker Toolbox 의 경우

구글링해서 ..

Deprecated 되어서

https://www.docker.com/products/docker-desktop/

<br />

---

<br />

`docker run hello-world`

<br />

---

<br />

PyTorch Basic Tensor Manipulation

* Vector, Matrix and Tensor
* NumPy Review
* PyTorch Tensor Allocation
* Matrix Multiplication
* Other Basic Ops

<br />

---

<br />

Vector, Matrix and Tensor

<br />

1차원 - 벡터

2차원 - 행렬

3차원 - 텐서

4차원 - 텐서 위로

5차원 - 4차원 옆으로 확장

6차원 - 뒤로도 확장

<br />

PyTorch Tensor Shape Convention

* 2D Tensor (Typical Simple Setting)

  |t| = (batch size, dim)

  batch size(64) 곱하기 dim(256) 사이즈 가진 텐서

* 3D Tensor (Typical Computer Vision)

  |t| = (batch size, width, height)

  세로 가로 깊이

* 3D Tensor (Typical Natural Language Processing)

  |t| = (batch size, length, dim)

<br />

Import

`pip install -r requirements.txt` 

```python
import numpy as np
import torch
```

<br />

NumPy 리뷰

1D Array with NumPy

```python
t = np.array([0., 1., 2., 3., 4., 5., 6.])
print(t)
# [ 0. 1. 2. 3. 4. 5. 6.]
```

```python
print('Rank  of t: ', t.ndim)
print('Shape of t: ', t.shape)
# Rank  of t: 1
# Shape of t: (7,)
```

```python
print('t[0] t[1] t[-1] = ', t[0], t[1], t[-1])  # Element
print('t[2:5] t[4:-1] = ', t[2:5], t[4:-1])  # Slicing
print('t[:2] t[3:] = ', t[:2], t[3:])  # Slicing
# t[0] t[1] t[-1] = 0.0 1.0 6.0
# t[2:5] t[4:-1] = [2. 3. 4.] [4. 5.]
# t[:2] t[3:] = [0. 1.] [3. 4. 5. 6.]
```

<br />

2D Array with NumPy

```python
t = np.array([[1., 2., 3.,], [4., 5., 6.], [7., 8., 9.], [10., 11., 12.]])
print(t)
"""
[[ 1.  2.  3.]
 [ 4.  5.  6.]
 [ 7.  8.  9.]
 [10. 11. 12.]]
"""

print('Rank  of t: ', t.ndim)  # Rank  of t: 2
print('Shape of t: ', t.shape)  # Shape of t: (4, 3)
```

<br />

### PyTorch Tensor

<br />

1D Array with PyTorch

```python
t = torch.FloatTensor([0., 1., 2., 3., 4., 5., 6.])
print(t)
# tensor([0., 1., 2., 3., 4., 5., 6.])

print(t.dim())  # rank
print(t.shape)  # shape
print(t.size())  # shape
print(t[0], t[1], t[-1])  # Element
print(t[2:5], t[4:-1])  # Slicing
print(t[:2], t[3:])  # Slicing

# 1
# torch.Size([7])
# torch.Size([7])
# tensor(0.) tensor(1.) tensor(6.)
# tensor([2., 3., 4.]) tensor([4., 5.])
# tensor([0., 1.]) tensor([3., 4., 5., 6.])
```

<br />

2D Array with PyTorch

```python
t = torch.FloatTensor([[1., 2., 3.],
                       [4., 5., 6.],
                       [7., 8., 9.],
                       [10., 11., 12.]
                      ])
print(t)
"""
tensor([[1., 2., 3.],
        [4., 5., 6.],
        [7., 8., 9.],
        [10., 11., 12.]])
"""

print(t.dim())  # rank
print(t.size()) # shape
print(t[:, 1])
print(t[:, 1].size())
print(t[:, :-1])
"""
2
torch.Size([4, 3])
tensor([ 2., 5., 8., 11.])
torch.Size([4])
tensor([[ 1.,  2.],
        [ 4.,  5.],
        [ 7.,  8.],
        [10., 11.]])
"""
```

<br />

### Broadcasting

```python
# Same shape
m1 = torch.FloatTensor([[3, 3]])
m2 = torch.FloatTensor([[2, 2]])
print(m1 + m2)
# tensor([[5., 5.]])

# Vector + scalar
m1 = torch.FloatTensor([[1, 2]])
m2 = torch.FloatTensor([3])  # 3 -> [[3, 3]]
print(m1 + m2)
# tensor([[4., 5.]])

# 2 x 1 Vector + 1 x 2 Vector
m1 = torch.FloatTensor([[1, 2]])
m2 = torch.FloatTensor([[[3], [4]]])
print(m1 + m2)
"""
tensor([[4., 5.],
        [5., 6.]])
"""
```

<br />

### Multiplication vs Matrix Multiplication

```python
print()
print('-------------')
print('Mul vs Matmul')
print('-------------')
m1 = torch.FloatTensor([[1, 2], [3, 4]])
m2 = torch.FloatTensor([[1], [2]])
print('Shape of Matrix 1: ', m1.shape)  # 2 x 2
print('Shape of Matrix 2: ', m2.shape)  # 2 x 1
print(m1.matmul(m2))  # 2 x 1

m1 = torch.FloatTensor([[1, 2], [3, 4]])
m2 = torch.FloatTensor([[1], [2]])
print('Shape of Matrix 1: ', m1.shape)  # 2 x 2
print('Shape of Matrix 2: ', m2.shape)  # 2 x 1
print(m1 * m2)  # 2 x 2
print(m1.mul(m2))

"""
-------------
Mul vs Matmul
-------------
Shape of Matrix 1: torch.Size([2, 2])
Shape of Matrix 2: torch.Size([2, 1])
tensor([[ 5.],
        [11.]])
Shape of Matrix 1: torch.Size([2, 2])
Shape of Matrix 2: torch.Size([2, 1])
tensor([[1., 2.],
        [6., 8.]])
tensor([[1., 2.],
        [6., 8.]])
"""
```

<br />

### Mean

```python
t = torch.FloatTensor([1, 2])
print(t.mean())
# tensor(1.5000)

# Can't use mean() on integers
t = torch.LongTensor([1, 2])
try:
    print(t.mean())
except Exception as exc:
    print(exc)    
# Can only calculate the mean of floating types. Got Long instead.

# You can also use t.mean for higher rank tensors to get mean of all elements, or mean by particular dimension.
t = torch.FloatTensor([[1, 2], [3, 4]])
print(t)
"""
tensor([[1., 2.],
        [3., 4.]])
"""

print(t.mean())
print(t.mean(dim=0))  # dim=0 은 첫번째 차원(행). 인자로 dim 을 준다면 해당 차원 제거한다는 의미. 행렬에서 '열'만 남긴다
print(t.mean(dim=1))  # dim=1. 두번째 차원 제거. 열이 제거된 텐서
print(t.mean(dim=-1))  # dim=-1. 마지막 차원 제거. 열 차원 제거
"""
tensor(2.5000)
tensor([2., 3.])
tensor([1.5000, 3.5000])
tensor([1.5000, 3.5000])
"""
```

<br >

### Sum

```python
t = torch.FloatTensor([[1, 2], [3, 4]])
print(t)
"""
tensor([[1., 2.],
        [3., 4.]])
"""

print(t.sum())
print(t.sum(dim=0))
print(t.sum(dim=1))
print(t.sum(dim=-1))
"""
tensor(10.)
tensor([4., 6.])
tensor([3., 7.])
tensor([3., 7.])
"""
```

<br />

### Max(가장 큰 값) and Argmax(그 인덱스 값)

```python
t = torch.FloatTensor([[1, 2], [3, 4]])
print(t)
"""
tensor([[1., 2.],
        [3., 4.]])
"""

# The max operator returns one value if it is called without an argument.
print(t.max()) # Returns one value: max
# tensor(4.)

# The max operator returns 2 values when called with dimension specified. The first value is the maximum value, and the second value is the argmax: the index of the element with maximum value.
print(t.max(dim=0)) # Returns two values: max and argmax
print('Max: ', t.max(dim=0)[0])
print('Argmax: ', t.max(dim=0)[1])
"""
(tensor([3., 4.]), tensor([1, 1]))
Max:  tensor([3., 4.])
Argmax:  tensor([1, 1])
"""

print(t.max(dim=1))
print(t.max(dim=-1))
"""
(tensor([2., 4.]), tensor([1, 1]))
(tensor([2., 4.]), tensor([1, 1]))
"""
```

<br />

---

<br />

### View  - 원소의 수를 유지하면서 텐서 크기 변경

<br />

```python
t = np.array([[[0, 1, 2],
               [3, 4, 5]],
              [[6, 7, 8],
               [9, 10, 11]]])
ft = torch.FloatTensor(t)
print(ft.shape)
# torch.Size([2, 2, 3])

print(ft.view([-1, 3]))
print(ft.view([-1, 3]).shape)
"""
tensor([[ 0.,  1.,  2.],
        [ 3.,  4.,  5.],
        [ 6.,  7.,  8.],
        [ 9., 10., 11.]])
torch.Size([4, 3])
"""

print(ft.view([-1, 1, 3]))
print(ft.view([-1, 1, 3]).shape)
"""
tensor([[[ 0.,  1.,  2.]],

        [[ 3.,  4.,  5.]],

        [[ 6.,  7.,  8.]],

        [[ 9., 10., 11.]]])
torch.Size([4, 1, 3])
"""
```

<br />

---

<br />

### Squeeze

<br />

```python
ft = torch.FloatTensor([[0], [1], [2]])
print(ft)
print(ft.shape)
"""
tensor([[0.],
        [1.],
        [2.]])
torch.Size([3, 1])
"""

print(ft.squeeze())
print(ft.squeeze().shape)
"""
tensor([0., 1., 2.])
torch.Size([3])
"""
```

<br />

---

<br />

### Unsqueeze

<br />

```python
ft = torch.Tensor([0, 1, 2])
print(ft.shape)
# torch.Size([3])

print(ft.unsqueeze(0))
print(ft.unsqueeze(0).shape)
"""
tensor([[0., 1., 2.]])
torch.Size([1, 3])
"""

print(ft.view(1, -1))
print(ft.view(1, -1).shape)
"""
tensor([[0., 1., 2.]])
torch.Size([1, 3])
"""

print(ft.unsqueeze(1))
print(ft.unsqueeze(1).shape)
"""
tensor([[0.],
        [1.],
        [2.]])
torch.Size([3, 1])
"""

print(ft.unsqueeze(-1))
print(ft.unsqueeze(-1).shape)
"""
tensor([[0.],
        [1.],
        [2.]])
torch.Size([3, 1])
"""
```

<br />

---

<br />

### Type Casting

<br />

```python
lt = torch.LongTensor([1, 2, 3, 4])
print(lt)
# tensor([1, 2, 3, 4])

print(lt.float())
# tensor([1., 2., 3., 4.])

bt = torch.ByteTensor([True, False, False, True])
print(bt)
# tensor([1, 0, 0, 1], dtype=torch.uint8)

print(bt.long())
print(bt.float())
"""
tensor([1, 0, 0, 1])
tensor([1., 0., 0., 1.])
"""
```

<br />

---

<br />

Concatenate

<br />

```python
x = torch.FloatTensor([[1, 2], [3, 4]])
y = torch.FloatTensor([[5, 6], [7, 8]])

print(torch.cat([x, y], dim=0))
print(torch.cat([x, y], dim=1))

"""
tensor([[1., 2.],
        [3., 4.],
        [5., 6.],
        [7., 8.]])
tensor([[1., 2., 5., 6.],
        [3., 4., 7., 8.]])
"""
```

<br />

---

<br />

### Stacking

```python
x = torch.FloatTensor([1, 4])
y = torch.FloatTensor([2, 5])
z = torch.FloatTensor([3, 6])

print(torch.stack([x, y, z]))
print(torch.stack([x, y, z], dim=1))

"""
tensor([[1., 4.],
        [2., 5.],
        [3., 6.]])
tensor([[1., 2., 3.],
        [4., 5., 6.]])
"""

print(torch.cat([x.unsqueeze(0), y.unsqueeze(0), z.unsqueeze(0)], dim=0))
"""
tensor([[1., 4.],
        [2., 5.],
        [3., 6.]])
"""
```

<br />

---

<br />

### Ones and Zeros Like

```python
x = torch.FloatTensor([[0, 1, 2], [2, 1, 0]])
print(x)
"""
tensor([[0., 1., 2.],
        [2., 1., 0.]])
"""

print(torch.ones_like(x))
print(torch.zeros_like(x))
"""
tensor([[1., 1., 1.],
        [1., 1., 1.]])
tensor([[0., 0., 0.],
        [0., 0., 0.]])
"""
```

<br />

---

<br />

### In-place Operation

<br />

```python
x = torch.FloatTensor([[1, 2], [3, 4]])

print(x.mul(2.))
print(x)
print(x.mul_(2.))
print(x)

"""
tensor([[2., 4.],
        [6., 8.]])
tensor([[1., 2.],
        [3., 4.]])
tensor([[2., 4.],
        [6., 8.]])
tensor([[2., 4.],
        [6., 8.]])
"""
```

<br />

---

<br />

* Data definition
* Hypothesis
* Compute loss
* Gradient descent

<br />

---

<br />