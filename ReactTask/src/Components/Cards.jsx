import '../App.css';
import Tweeter from './Card';
import Ashraf from './pic/Ashraf.png'
import Razan from './pic/Razan.png'
import Anas from './pic/anas.png'
import jasem from './pic/jasem.png'
import abdulrahman from './pic/abdulrahman.png'

function Cards() {

    const Friends = [
        {
            image: Ashraf,
            name: "Ashraf",
            addris: 'Jordan, Aqaba',
            job: 'Software Engineer',
            disc: '  لو حطينا آكامي وإرزا سكارليت في بوستر وين بقدر ألزقه        🤔 لازم ادبرلهن مطرح    ',
            linkedin: 'https://www.linkedin.com/in/ashraf-aljabari/',
            facebook: 'https://www.facebook.com/aha.jaja9696',
            github: 'https://github.com/ashraf-aljabari',

        },
        {
            image: Razan,
            name: "Razan",
            addris: 'Jordan, Irbid',
            job: 'Communication Engineering',
            disc: 'انا سيف والليل والبيداء تعرفني ... والكويز والكحوت عرفو مواهبي وفوزوني',
            linkedin: 'https://www.linkedin.com/in/razan-zuaiter/',
            facebook: 'https://www.facebook.com/Razan.zaiter.13',
            github: 'https://github.com/Razan-Zuaiter',

        },
        {
            image: Anas,
            name: "Anas",
            addris: 'Jordan, amman',
            job: 'Trainee at Coding Academy',
            disc: 'هو هاظ كله متى اخذناه هو انا معهم بالكلاس ولا وايش بالزبط ',
            linkedin: 'https://www.linkedin.com/in/anas-aljawa/',
            facebook: 'https://www.facebook.com/mhmd6bdour',
            github: 'https://github.com/anasJawabrah',

        },
        {
            image: jasem,
            name: "jasem",
            addris: 'Jordan, Salt',
            job: 'Web Developer',
            disc: 'هالسشن مش ناوية تخلص ول بدنآاااااااااااااام',
            linkedin: 'https://www.linkedin.com/in/mohammed-aljasem/',
            facebook: 'https://www.facebook.com/Mohammed.M.aljasem',
            github: 'https://github.com/Mohammed-Aljasem',

        },
        {
            image: abdulrahman,
            name: "abdulrahman",
            addris: 'Jordan, Ajlon',
            job: 'Developer',
            disc: 'انداري عنكو يا جماعة التاسك سهل بخمس دقايق حليته ',
            linkedin: 'https://www.linkedin.com/in/abd-abdaldeen/',
            facebook: 'https://www.facebook.com/abdalrahman.aldawaimah',
            github: 'https://github.com/abdAbdaldeen',

        }

    ]


    return (
        <div>

            <div className="cards" >
                {Friends.map((tweet) => (
                    <Tweeter image={tweet.image} name={tweet.name} addris={tweet.addris} job={tweet.job} disc={tweet.disc} linkedin={tweet.linkedin} facebook={tweet.facebook} github={tweet.github} />
                )
                )}
            </div>

        </div>
    );
}

export default Cards;