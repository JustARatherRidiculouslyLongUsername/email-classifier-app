const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const { spawn } = require('child_process')


app.get('/', (req, res) => { res.send('cool') })

app.get('/:a/:b', (req, res) => {
	let {a, b} = req.params
	
	const python_process = spawn('python', ['./x.py', a, b])

	python_process.stdout.on('data', data => {
		console.log('python says ', data)
		res.end(data.toString())
	})
})

app.listen(port, () => {
  console.log(`listening at port ${port}`)
})
