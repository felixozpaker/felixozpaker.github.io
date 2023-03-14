import StudentVue from 'studentvue';

const DISTRICT_URL = 'https://md-mcps-psv.edupoint.com/PXP2_Login_Student.aspx?regenerateSessionId=True';
const USERNAME = '469221';
const PASSWORD = 'Cq25dhh';
const client = await StudentVue.login(DISTRICT_URL, { username: USERNAME, password: PASSWORD });
console.log("hello");