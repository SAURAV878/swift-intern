// immutability: means once data is cerated, it never changes ,if you want to change then you have to make a whole new copy 

const originalProfile = {
    username: 'saurav_ghimire',
    status: 'active',
    skills:['JS', 'Node']
};

const updatedProfile = {...originalProfile, status: 'learning'};

const finalProfile = {...updatedProfile, skills: [...skills, 'Express']};

console.log(originalProfile.status);
console.log(finalProfile.skills);