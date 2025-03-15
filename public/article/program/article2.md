---
title: "[Leetcode 210] Course Schedule II 2.0 | 解題思路分享"
date: "2025-03-10"
author: James
tags: BFS,DFS,DP,String,Array,Medium,Leetcode,Binary Tree,Stack,Monotone Stack,Linked List,Bubble Sort,Selection Sort,Merge Sort
image: /images/life/Guitar.JPEG
description: "摘要摘要"
toc: true
readTime: 3
---

### **題目描述**

你需要修 numCourses 門課，這些課程從 `0` 到 `numCourses - 1` 編號。某些課程有先修課，用一個 `prerequisites` array 來表示，`prerequisites[i] = [a, b]`，意思是：

> 想修課 a，必須先修課 b（`b → a`）。

題目要求返回一個可行的修課順序，讓你可以完成所有課程。如果無法完成所有課程（Graph 中存在 Cycle），則返回空陣列。

題目連結 🔗：[Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)

<figure>
  <img src="/images/Guitar.JPEG" alt="beach" />
  <figcaption style="font-size: 0.8em; text-align: center; color: gray;">
    這是一把吉他，背景是海灘 🌊🎸
  </figcaption>
</figure>

### **問題分析**

題目說要返回合理的修課順序，如果把這些課程的先修後修關係畫成一張有向圖 ( Directed Graph )，我們要確保每門課程只有在所有先修課完成後才會出現在順序中，這個問題本質上就是尋找拓撲排序 ( Topological Sort )。

### **為什麼使用 Topological Sort？**

在 DAG ( Directed Acyclic Graph ) 中，拓撲排序是一種將圖中所有節點排序，並且對於每一條邊 `u → v`，節點 `u` 會出現在 `v` 之前。

這剛好符合課程的先修需求，且若圖中存在環 ( Cycle )，則無法完成所有課程。

### **解題思路 - Topological Sort**

題目給的是 Edges，我們需要將其轉換為 Adjacency List 來方便實作拓撲排序。

我們使用 Kahn's Algorithm (BFS) 實作拓撲排序，主要流程如下：

-  **建立圖與入度表**：遍歷 `prerequisites`，構造鄰接表和記錄每個節點的入度。

-  **將入度為 0 的節點加入隊列**：這些節點沒有前置依賴，可以直接修課。

-  **BFS 逐層遍歷**：依次取出隊列中的節點，將其加入結果集。

-  **判斷是否存在環**：若最終結果集的大小等於課程數，則返回順序；否則圖中存在環，無法完成所有課程，返回空陣列。

**時間複雜度**：`O(V + E)`，其中 `V` 是課程數，`E` 是先修課程的對數。

**空間複雜度**：`O(V + E)`，用於存儲鄰接表、入度陣列和隊列。

### **實作程式碼**

```cpp
vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites) {
    vector<vector<int>> adj(numCourses); // Adjacency list
    vector<int> in_degree(numCourses, 0); // Store in-degrees
    vector<int> order; // Store the result
    queue<int> q; // Queue for BFS

    // Build the graph and track in-degrees
    for (vector<int>& pre : prerequisites) {
        adj[pre[1]].push_back(pre[0]);
        in_degree[pre[0]]++;
    }

    // Add courses with 0 in-degree (no prerequisites) to the queue
    for (int i = 0; i < in_degree.size(); i++) {
        if (in_degree[i] == 0) {
            q.push(i);
        }
    }

    // Perform BFS
    while (!q.empty()) {
        int curr = q.front();
        q.pop();
        order.push_back(curr);

        for (int next : adj[curr]) {
            in_degree[next]--;
            if (in_degree[next] == 0) {
                q.push(next);
            }
        }
    }

    // If all courses are included in the order, return it; otherwise, return an empty array
    return (order.size() == numCourses) ? order : vector<int>();
}
```

## 📝 相關題目

[Leetcode 207: Course Schedule](https://leetcode.com/problems/course-schedule/)

[Leetcode 269: Alien Dictionary](https://leetcode.com/problems/alien-dictionary/)

[Leetcode 444: Sequence Reconstruction](https://leetcode.com/problems/sequence-reconstruction/)

[ArticleCar](https://jamesblogger.com/zh/program/leetcode-210/)

---

### 📌 小結

這題本質是 **有向無環圖 (DAG)** 的 **拓撲排序** 問題，適合用 **Kahn's Algorithm (BFS)** 來解決，若發現存在環則無解，否則能順利找到一個合法的修課順序。


