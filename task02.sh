# Task 02
# Write test cases for the above program using in/out files.
# For the command line arguments, consider using the command xargs to pass a command line arguments to
# program as it runs.
# For the standard input version, create a .in file and redirect it to your node program.

# Test 1: Command line argument
cat ./test/task2/1.in | xargs node task01.js > ./test/task2/actual_1.out
diff ./test/task2/actual_1.out ./test/task2/1.out && echo "Test 1 Passed" || echo "Test 1 Failed"

# Test 2: File argument
node task01.js ./test/task2/name.txt > ./test/task2/actual_2.out
diff ./test/task2/actual_2.out ./test/task2/2.out && echo "Test 2 Passed" || echo "Test 2 Failed"