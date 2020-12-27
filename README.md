# Tech challenge

## Description
A program that solves the most suitable (with most power) link station for a device at a given point [x,y].

### Details
Link stations have reach and power. A link station’s power can be calculated:
- power = (reach - device's distance from linkstation)^2
- if distance > reach, power = 0

## Expected functionality
Prints out function output from points (x, y): (0,0), (100, 100), (15,10) and (18, 18).

Print format:
“Best link station for point x,y is x,y with power z”
or: “No link station within reach for point x,y”

## Link stations
Linkstations are located at points (x, y) and have reach (r) ([x, y, r]):
0: [[0, 0, 10],
1: [20, 20, 5],
2: [10, 0, 12]]

