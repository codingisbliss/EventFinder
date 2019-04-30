module.exports = function () {
    this.dbObj;
    this.connect = function () { 
        const low = require('lowdb')
        const FileSync = require('lowdb/adapters/FileSync')
        const adapter = new FileSync('eventDatabase.json')
        const db = low(adapter)
        this.dbObj = db
        var classificationData = {
            "Music":{
            'R&B': 'KnvZfZ7vAee',
            'Hip-Hop': 'KnvZfZ7vAv1',
            'Rap' : 'KnvZfZ7vAv1',
            'Comedy': 'KnvZfZ7vAe1',
            'Classical': 'KnvZfZ7v7nJ',
            'Jazz': 'KnvZfZ7vAvE',
            'Foreign': 'KnvZfZ7vAk1',
            'Dance': 'KnvZfZ7vAvF',
            'Electronic':'KnvZfZ7vAvF'
            },
            "Film":{
                'Horror':'FnvZfZ7vAee',
                'Action':'FnvZfZ7vAv1',
                'Romance':'FnvZfZ7vAv1'
            }
        };
        db.defaults({ profile: [],classification:classificationData})
        .write()
        console.log("DB Created...")
    }
    this.add = function(email,passwd,cName,genre){
        var UUID = require("uuid");
        var id = UUID.v4();
        const gid = this.dbObj.get('classification').get(cName).get(genre)
        var res1 = this.dbObj.get('profile')
        .push({pid:id,email:email,password :passwd,classificationName:cName,genreId :gid})
        .write();
        //console.log("gid"+cid)
        return res1;
    }
    this.update = function(email,cName,newpref){

        //console.log("new pref"+newpref+email+cName)
        const gid = this.dbObj.get('classification').get(cName).get(newpref)
        const post = this.dbObj.get('profile')
        .find({email:email})
        .assign({genreId:gid})
        .write();
        //console.log("update check"+cid)
        return post;

    }
    this.search = function(key){
        const post = this.dbObj.get('profile')
        .find({email:key})
        .value();
        //console.log(post+"search result")
        return post;
    }
}