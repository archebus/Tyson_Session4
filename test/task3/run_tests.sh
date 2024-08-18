#!/bin/bash

# Test 1: Searching in a file
echo "./test/task3/search_me.txt hacker" | xargs node ./task03.js > ./test/task3/actual_1.out
diff ./test/task3/actual_1.out ./test/task3/1.out && echo "Test Passed" || echo "Test Failed"