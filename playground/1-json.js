const fs=require("fs")
//1. load and parse the JSON data
const json_buffer=fs.readFileSync('1-json.json')
const json_str=json_buffer.toString()
const json_data=JSON.parse(json_str)
//2. change the values
json_data.name="Rose"
json_data.age=25

//3. change it and write it to the file
const data_write=JSON.stringify(json_data)
fs.writeFileSync('1-json.json',data_write)