const util = require('util')
const exec = util.promisify(require('child_process').exec)
async function upload(cmdStr) {
    const { stdout, stderr } = await exec(cmdStr)
    console.log('stdout:', stdout)
    console.log('stderr:', stderr)
}
// upload(` scp root@118.31.23.219:/home/tomcat/webapps/dist/test.html /Users/albanjin/Downloads/UcShare/`)
// /Users/albanjin/Downloads/UcShare/
upload(`scp -rv  /Users/albanjin/Downloads/UcShare/test/view   root@118.31.23.219:/home/tomcat/webapps/`)



//  scp root@118.31.23.219:/home/tomcat/webapps/dist/test.html /Users/albanjin/Downloads