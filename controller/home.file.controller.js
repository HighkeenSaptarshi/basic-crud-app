const fs = require('fs-extra');
const path = require('path')

const filePath = path.resolve(__dirname, '../DB/data.json');


exports.addUser = (req, res) => {
    const stringyFiedJSON = JSON.stringify(req.body);

    fs.writeFile(filePath, stringyFiedJSON, 'utf-8', (err) => {
        if(err){
            console.log('something went wrong ' + err);
        }
        else {
            console.log('Data written successfully');
        }
    })

    res.status(200).send('Success')
    res.end();
}

exports.getUser = (req, res) => {
    fs.readFile(filePath, (err, data)=>{
        if(err){
            res.status(500).json({error:'Internal Server Error'});
        }

        try {
            const jsonFile = JSON.parse(data);
            res.status(200).json(jsonFile);
        } catch (error) {
            res.send(500).json({error: 'parse error'})
        }
    })
}

exports.deleteUser = (req, res) => {
    const id = parseInt(req.params.id);

    fs.readFile(filePath, (err, data)=>{

        if(err){
            'Something went wrong while deleting user...'
        }

        try {
            const fetchedData = JSON.parse(data);
            const newData = fetchedData.filter((ele)=> ele.id !== id);
            const dataToWrite = JSON.stringify(newData)
    
            fs.writeFile(filePath, dataToWrite, 'utf-8', (err)=>{
                if(err){
                    console.log('Something went wrong while writing...');
                }
                try {
                    res.status(200).send('deleted successfully id ' + id);
                    // res.status(200).json(newData);
                } catch (error) {
                    console.log('error in writing after delete',error);
                }
            })
        } catch (error) {
            
        }

    })
}

exports.updateUser = (req, res) => {
    const id = parseInt(req.params.id);

    fs.readFile(filePath, (err, data)=>{
        if(err){
            console.log('Something went wrong in updating...');
        }

        try {
            const fetchedData = JSON.parse(data);

            const newData = fetchedData.map((ele)=>{
                if (ele.id === id) {
                    if(req.body.name){
                        ele['name'] = req.body.name;
                    }
                    if(req.body.age){
                        ele['age'] = req.body.age;
                    }

                }
                return ele;
            })
    
            console.log('data to update', newData);
            const dataToUpdate = JSON.stringify(newData);


            fs.writeFile(filePath, dataToUpdate, 'utf-8', (err)=>{
                if(err){
                    console.log('Something went wrong while writing...');
                }
                try {
                    res.status(200).send('updated successfully id ' + id);
                    // res.status(200).json(newData);
                } catch (error) {
                    console.log(error);
                }
            })

        } catch (error) {
            console.log('error in writing after update',error);
            res.status(500).json({error:'Internal Server Error'});
        }

        
    })


}