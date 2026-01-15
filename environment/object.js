const profile = {
    name: 'Saurav',
    level: 1,
    social: {github: 'saurav-codes'}
};

profile.role = 'Intern';
profile.level = 2;

delete profile.name;



console.log(profile.name);
console.log(profile);
console.log(profile.social.github);

const colne = {...profile };
colne.level = 99;

colne.social.github = 'hacked';

console.log('ooriginal level: ', profile.level);
console.log('clone level: ', colne.level);
console.log('original github: ', profile.social.github);