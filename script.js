const words = [
    // Technology & Computing
    'JAVASCRIPT', 'CANVAS', 'DRAWING', 'GAME', 'COMPUTER',
    'KEYBOARD', 'MONITOR', 'PIXEL', 'ANIMATION', 'INTERNET',
    'ALGORITHM', 'DATABASE', 'FUNCTION', 'VARIABLE', 'LIBRARY',
    'FRAMEWORK', 'BROWSER', 'SERVER', 'NETWORK', 'PUZZLE',
    'CHALLENGE', 'SUCCESS', 'VICTORY', 'TRIUMPH', 'ARTIST',
    'DESIGNER', 'DEVELOPER', 'ENGINEER', 'GENIUS', 'SOFTWARE',
    'HARDWARE', 'MEMORY', 'STORAGE', 'SYSTEM', 'PROGRAM',
    'CODING', 'SCRIPT', 'MODULE', 'WIDGET', 'PLUGIN',
    'UPLOAD', 'DOWNLOAD', 'WEBSITE', 'DOMAIN', 'HOSTING',
    'DIGITAL', 'VIRTUAL', 'CYBER', 'TECH', 'DATA',
    // Fruits & Food
    'APPLE', 'BANANA', 'ORANGE', 'GRAPE', 'LEMON',
    'MANGO', 'PEACH', 'CHERRY', 'BERRY', 'MELON',
    'KIWI', 'PLUM', 'PEAR', 'FIG', 'LIME',
    'COCONUT', 'AVOCADO', 'PAPAYA', 'APRICOT', 'OLIVE',
    'BREAD', 'BUTTER', 'CHEESE', 'PASTA', 'RICE',
    'SALAD', 'SOUP', 'STEAK', 'CHICKEN', 'BACON',
    'PIZZA', 'BURGER', 'SANDWICH', 'TACO', 'SUSHI',
    'COOKIE', 'CAKE', 'PIE', 'CANDY', 'CHOCOLATE',
    'COFFEE', 'TEA', 'JUICE', 'MILK', 'WINE',
    'HONEY', 'SUGAR', 'SALT', 'PEPPER', 'SPICE',
    // Nature & Geography
    'WATER', 'RIVER', 'OCEAN', 'MOUNTAIN', 'VALLEY',
    'FOREST', 'DESERT', 'ISLAND', 'SUNSET', 'SUNRISE',
    'GARDEN', 'FLOWER', 'TREE', 'LEAF', 'BRANCH',
    'MEADOW', 'PRAIRIE', 'JUNGLE', 'SWAMP', 'MARSH',
    'LAKE', 'POND', 'STREAM', 'CREEK', 'WATERFALL',
    'BEACH', 'SHORE', 'COAST', 'CLIFF', 'CANYON',
    'CAVE', 'VOLCANO', 'GLACIER', 'ICEBERG', 'REEF',
    'FIELD', 'HILL', 'PEAK', 'RIDGE', 'PLATEAU',
    'ROCK', 'STONE', 'PEBBLE', 'SAND', 'SOIL',
    'GRASS', 'MOSS', 'FERN', 'VINE', 'BUSH',
    // Home & Furniture
    'HOUSE', 'WINDOW', 'DOOR', 'ROOF', 'FLOOR',
    'TABLE', 'CHAIR', 'LAMP', 'MIRROR', 'CLOCK',
    'COUCH', 'SOFA', 'BED', 'PILLOW', 'BLANKET',
    'CARPET', 'RUG', 'CURTAIN', 'SHELF', 'DRAWER',
    'CLOSET', 'CABINET', 'DESK', 'BENCH', 'STOOL',
    'KITCHEN', 'BATHROOM', 'BEDROOM', 'LIVING', 'DINING',
    'GARAGE', 'BASEMENT', 'ATTIC', 'PORCH', 'BALCONY',
    'FENCE', 'GATE', 'PATH', 'LAWN', 'PATIO',
    'SINK', 'TUB', 'SHOWER', 'TOILET', 'FAUCET',
    'STOVE', 'OVEN', 'FRIDGE', 'FREEZER', 'TOASTER',
    // Office & School
    'BOOK', 'PAPER', 'PENCIL', 'ERASER', 'NOTEBOOK',
    'PEN', 'MARKER', 'CRAYON', 'RULER', 'SCISSORS',
    'STAPLER', 'FOLDER', 'BINDER', 'TAPE', 'GLUE',
    'ENVELOPE', 'STAMP', 'LETTER', 'NOTE', 'CARD',
    'REPORT', 'ESSAY', 'THESIS', 'ARTICLE', 'JOURNAL',
    'TEXTBOOK', 'NOVEL', 'MAGAZINE', 'MANUAL', 'GUIDE',
    'LESSON', 'LECTURE', 'CLASS', 'COURSE', 'SEMINAR',
    'EXAM', 'TEST', 'QUIZ', 'GRADE', 'SCORE',
    'HOMEWORK', 'PROJECT', 'RESEARCH', 'STUDY', 'LEARNING',
    'STUDENT', 'PUPIL', 'SCHOLAR', 'GRADUATE', 'ALUMNI',
    // Music & Arts
    'MUSIC', 'GUITAR', 'PIANO', 'DRUM', 'VIOLIN',
    'DANCE', 'SINGER', 'MOVIE', 'THEATER', 'STAGE',
    'SONG', 'MELODY', 'HARMONY', 'RHYTHM', 'BEAT',
    'CHORD', 'NOTE', 'TEMPO', 'TUNE', 'LYRIC',
    'BAND', 'ORCHESTRA', 'CHOIR', 'CONCERT', 'FESTIVAL',
    'PAINTING', 'SCULPTURE', 'DRAWING', 'SKETCH', 'PORTRAIT',
    'CANVAS', 'BRUSH', 'PALETTE', 'EASEL', 'FRAME',
    'GALLERY', 'EXHIBIT', 'STUDIO', 'WORKSHOP', 'CRAFT',
    'DRAMA', 'COMEDY', 'TRAGEDY', 'ROMANCE', 'HORROR',
    'FICTION', 'FANTASY', 'MYSTERY', 'THRILLER', 'ACTION',
    // Space & Science
    'PLANET', 'STAR', 'MOON', 'GALAXY', 'COMET',
    'ASTEROID', 'METEOR', 'NEBULA', 'COSMOS', 'UNIVERSE',
    'ORBIT', 'GRAVITY', 'ROCKET', 'SHUTTLE', 'SATELLITE',
    'TELESCOPE', 'RADAR', 'LASER', 'SOLAR', 'LUNAR',
    'ATOM', 'MOLECULE', 'ELEMENT', 'COMPOUND', 'PARTICLE',
    'ENERGY', 'FORCE', 'MOTION', 'VELOCITY', 'MASS',
    'HEAT', 'LIGHT', 'SOUND', 'WAVE', 'FREQUENCY',
    'ELECTRIC', 'MAGNETIC', 'NUCLEAR', 'CHEMICAL', 'PHYSICAL',
    'BIOLOGY', 'CHEMISTRY', 'PHYSICS', 'GEOLOGY', 'ECOLOGY',
    'THEORY', 'HYPOTHESIS', 'FORMULA', 'EQUATION', 'LAW',
    // Animals
    'ANIMAL', 'TIGER', 'LION', 'ELEPHANT', 'GIRAFFE',
    'DOLPHIN', 'WHALE', 'SHARK', 'PENGUIN', 'EAGLE',
    'BUTTERFLY', 'SPIDER', 'RABBIT', 'SQUIRREL', 'TURTLE',
    'DOG', 'CAT', 'BIRD', 'FISH', 'HORSE',
    'COW', 'PIG', 'SHEEP', 'GOAT', 'CHICKEN',
    'DUCK', 'GOOSE', 'TURKEY', 'DEER', 'BEAR',
    'WOLF', 'FOX', 'MONKEY', 'GORILLA', 'ZEBRA',
    'HIPPO', 'RHINO', 'LEOPARD', 'CHEETAH', 'PANTHER',
    'SNAKE', 'LIZARD', 'FROG', 'TOAD', 'ALLIGATOR',
    'CRAB', 'LOBSTER', 'SHRIMP', 'OCTOPUS', 'JELLYFISH',
    'ANT', 'BEE', 'WASP', 'FLY', 'MOSQUITO',
    'BEETLE', 'CRICKET', 'MOTH', 'WORM', 'SNAIL',
    'OWL', 'HAWK', 'FALCON', 'CROW', 'RAVEN',
    'PARROT', 'PEACOCK', 'SWAN', 'FLAMINGO', 'PELICAN',
    'SEAL', 'WALRUS', 'OTTER', 'BEAVER', 'MOLE',
    // Professions
    'DOCTOR', 'TEACHER', 'PILOT', 'CHEF', 'NURSE',
    'LAWYER', 'FARMER', 'BAKER', 'WRITER', 'PAINTER',
    'ACTOR', 'DIRECTOR', 'PRODUCER', 'MUSICIAN', 'DANCER',
    'ATHLETE', 'COACH', 'TRAINER', 'MANAGER', 'LEADER',
    'SCIENTIST', 'PROFESSOR', 'RESEARCHER', 'ANALYST', 'EXPERT',
    'ARCHITECT', 'BUILDER', 'PLUMBER', 'MECHANIC', 'DRIVER',
    'SAILOR', 'CAPTAIN', 'SOLDIER', 'OFFICER', 'GUARD',
    'POLICE', 'FIREMAN', 'PARAMEDIC', 'DENTIST', 'SURGEON',
    'THERAPIST', 'COUNSELOR', 'ADVISOR', 'CONSULTANT', 'AGENT',
    'BANKER', 'ACCOUNTANT', 'BROKER', 'TRADER', 'INVESTOR',
    // Electronics & Gadgets
    'CAMERA', 'PHONE', 'LAPTOP', 'TABLET', 'SPEAKER',
    'HEADPHONE', 'CHARGER', 'BATTERY', 'CABLE', 'ADAPTER',
    'SCREEN', 'DISPLAY', 'PROJECTOR', 'PRINTER', 'SCANNER',
    'ROUTER', 'MODEM', 'ANTENNA', 'RECEIVER', 'REMOTE',
    'CONSOLE', 'JOYSTICK', 'MOUSE', 'TOUCHPAD', 'WEBCAM',
    'MICROPHONE', 'AMPLIFIER', 'MIXER', 'RECORDER', 'PLAYER',
    'SENSOR', 'DETECTOR', 'ALARM', 'TIMER', 'SWITCH',
    'BUTTON', 'DIAL', 'KNOB', 'LEVER', 'PEDAL',
    'CIRCUIT', 'CHIP', 'PROCESSOR', 'DRIVE', 'DISK',
    'FLASH', 'CARD', 'PORT', 'SLOT', 'CONNECTOR',
    // Clothing & Accessories
    'HELMET', 'JACKET', 'GLOVES', 'BOOTS', 'SCARF',
    'SHIRT', 'PANTS', 'SHORTS', 'DRESS', 'SKIRT',
    'COAT', 'SWEATER', 'HOODIE', 'VEST', 'BLAZER',
    'JEANS', 'LEGGINGS', 'SOCKS', 'SHOES', 'SANDALS',
    'SNEAKERS', 'HEELS', 'SLIPPERS', 'HAT', 'CAP',
    'BELT', 'TIE', 'BOW', 'RIBBON', 'BUCKLE',
    'WATCH', 'BRACELET', 'NECKLACE', 'RING', 'EARRING',
    'GLASSES', 'SUNGLASSES', 'GOGGLES', 'MASK', 'VISOR',
    'BAG', 'PURSE', 'WALLET', 'BACKPACK', 'LUGGAGE',
    'UMBRELLA', 'CANE', 'FAN', 'PARASOL', 'PONCHO',
    // Transportation & Places
    'BRIDGE', 'TUNNEL', 'HIGHWAY', 'RAILWAY', 'AIRPORT',
    'CASTLE', 'PALACE', 'TEMPLE', 'CHURCH', 'MUSEUM',
    'CAR', 'TRUCK', 'BUS', 'TRAIN', 'PLANE',
    'BOAT', 'SHIP', 'YACHT', 'FERRY', 'CANOE',
    'BICYCLE', 'MOTORCYCLE', 'SCOOTER', 'SKATEBOARD', 'WAGON',
    'TAXI', 'AMBULANCE', 'FIRETRUCK', 'POLICE', 'TRACTOR',
    'STATION', 'TERMINAL', 'PLATFORM', 'DOCK', 'PIER',
    'RUNWAY', 'HANGAR', 'DEPOT', 'GARAGE', 'PARKING',
    'STREET', 'AVENUE', 'BOULEVARD', 'ROAD', 'LANE',
    'ALLEY', 'PLAZA', 'SQUARE', 'PARK', 'GARDEN',
    // Materials & Elements
    'DIAMOND', 'CRYSTAL', 'SILVER', 'GOLD', 'BRONZE',
    'COPPER', 'IRON', 'STEEL', 'ALUMINUM', 'TITANIUM',
    'PLATINUM', 'BRASS', 'TIN', 'LEAD', 'ZINC',
    'WOOD', 'BAMBOO', 'CORK', 'RUBBER', 'LEATHER',
    'COTTON', 'SILK', 'WOOL', 'LINEN', 'NYLON',
    'PLASTIC', 'GLASS', 'CERAMIC', 'PORCELAIN', 'MARBLE',
    'GRANITE', 'CONCRETE', 'CEMENT', 'BRICK', 'TILE',
    'FABRIC', 'VELVET', 'SATIN', 'DENIM', 'FLEECE',
    'WAX', 'OIL', 'GAS', 'FUEL', 'COAL',
    'PAPER', 'CARDBOARD', 'FOAM', 'SPONGE', 'CLAY',
    // Weather & Time
    'THUNDER', 'RAINBOW', 'STORM', 'CLOUD', 'WIND',
    'SPRING', 'SUMMER', 'AUTUMN', 'WINTER', 'SEASON',
    'MORNING', 'EVENING', 'MIDNIGHT', 'DAWN', 'DUSK',
    'RAIN', 'SNOW', 'HAIL', 'SLEET', 'FOG',
    'MIST', 'DEW', 'FROST', 'ICE', 'BLIZZARD',
    'HURRICANE', 'TORNADO', 'CYCLONE', 'TYPHOON', 'DROUGHT',
    'SUNSHINE', 'SHADE', 'SHADOW', 'TWILIGHT', 'DAYLIGHT',
    'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY',
    'SATURDAY', 'SUNDAY', 'WEEKEND', 'WEEKDAY', 'HOLIDAY',
    'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY',
    // Emotions & Concepts
    'DREAM', 'WONDER', 'MAGIC', 'SECRET', 'HOPE',
    'LOVE', 'JOY', 'PEACE', 'FAITH', 'TRUST',
    'COURAGE', 'STRENGTH', 'WISDOM', 'KNOWLEDGE', 'TRUTH',
    'FREEDOM', 'JUSTICE', 'HONOR', 'GLORY', 'PRIDE',
    'PASSION', 'DESIRE', 'AMBITION', 'VISION', 'MISSION',
    'POWER', 'FORCE', 'SPIRIT', 'SOUL', 'MIND',
    'HEART', 'BRAIN', 'THOUGHT', 'IDEA', 'CONCEPT',
    'MEMORY', 'EMOTION', 'FEELING', 'MOOD', 'ATTITUDE',
    'FEAR', 'ANGER', 'SADNESS', 'WORRY', 'STRESS',
    'CALM', 'RELIEF', 'COMFORT', 'SAFETY', 'SECURITY',
    // Sports & Games
    'SOCCER', 'FOOTBALL', 'BASEBALL', 'BASKETBALL', 'TENNIS',
    'GOLF', 'HOCKEY', 'RUGBY', 'CRICKET', 'BOXING',
    'SWIMMING', 'DIVING', 'SURFING', 'SKIING', 'SKATING',
    'RUNNING', 'JOGGING', 'WALKING', 'HIKING', 'CLIMBING',
    'CYCLING', 'RACING', 'WRESTLING', 'FENCING', 'ARCHERY',
    'CHESS', 'CHECKERS', 'POKER', 'DOMINO', 'BINGO',
    'BALL', 'BAT', 'RACKET', 'NET', 'GOAL',
    'COURT', 'FIELD', 'TRACK', 'ARENA', 'STADIUM',
    'TEAM', 'PLAYER', 'REFEREE', 'CHAMPION', 'WINNER',
    'MEDAL', 'TROPHY', 'AWARD', 'PRIZE', 'RECORD',
    // Body & Health
    'HEAD', 'FACE', 'EYE', 'EAR', 'NOSE',
    'MOUTH', 'TOOTH', 'TONGUE', 'LIP', 'CHIN',
    'NECK', 'SHOULDER', 'ARM', 'ELBOW', 'WRIST',
    'HAND', 'FINGER', 'THUMB', 'PALM', 'NAIL',
    'CHEST', 'BACK', 'SPINE', 'RIB', 'HIP',
    'LEG', 'KNEE', 'ANKLE', 'FOOT', 'TOE',
    'SKIN', 'BONE', 'MUSCLE', 'NERVE', 'VEIN',
    'BLOOD', 'ORGAN', 'LIVER', 'KIDNEY', 'LUNG',
    'HEALTH', 'FITNESS', 'EXERCISE', 'DIET', 'NUTRITION',
    'MEDICINE', 'VITAMIN', 'PROTEIN', 'MINERAL', 'CALCIUM',
    // Actions & Verbs
    'RUN', 'WALK', 'JUMP', 'CLIMB', 'SWIM',
    'FLY', 'DRIVE', 'RIDE', 'SAIL', 'FLOAT',
    'PUSH', 'PULL', 'LIFT', 'CARRY', 'THROW',
    'CATCH', 'KICK', 'HIT', 'PUNCH', 'SLAP',
    'CUT', 'CHOP', 'SLICE', 'DICE', 'MINCE',
    'MIX', 'STIR', 'BLEND', 'POUR', 'FILL',
    'OPEN', 'CLOSE', 'LOCK', 'UNLOCK', 'SEAL',
    'READ', 'WRITE', 'SPEAK', 'LISTEN', 'WATCH',
    'THINK', 'FEEL', 'KNOW', 'LEARN', 'TEACH',
    'CREATE', 'BUILD', 'MAKE', 'FIX', 'REPAIR',
    // Miscellaneous
    'KING', 'QUEEN', 'PRINCE', 'PRINCESS', 'KNIGHT',
    'WIZARD', 'WITCH', 'FAIRY', 'DRAGON', 'GIANT',
    'HERO', 'VILLAIN', 'LEGEND', 'MYTH', 'TALE',
    'STORY', 'CHAPTER', 'PAGE', 'WORD', 'SENTENCE',
    'NUMBER', 'LETTER', 'SYMBOL', 'SIGN', 'CODE',
    'KEY', 'LOCK', 'CHAIN', 'ROPE', 'WIRE',
    'BOX', 'CONTAINER', 'PACKAGE', 'BUNDLE', 'STACK',
    'PILE', 'HEAP', 'BUNCH', 'GROUP', 'SET',
    'PAIR', 'COUPLE', 'TRIO', 'DOZEN', 'HUNDRED',
    'ZERO', 'ONE', 'TWO', 'THREE', 'FOUR'
];

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const messageDiv = document.getElementById('message');
const gameOverDiv = document.getElementById('gameOver');
const wordRevealDiv = document.getElementById('wordReveal');
const newGameBtn = document.getElementById('newGameBtn');
const timerDiv = document.getElementById('timeLeft');
const timerFill = document.getElementById('timerFill');

let currentWord = '';
let gameActive = false;
let gameDuration = 30000; // 30 seconds
let gameStartTime = 0;
let animationFrameId = null;
let wins = parseInt(localStorage.getItem('wins')) || 0;
let losses = parseInt(localStorage.getItem('losses')) || 0;
let streak = parseInt(localStorage.getItem('streak')) || 0;

document.getElementById('wins').textContent = wins;
document.getElementById('losses').textContent = losses;
document.getElementById('streak').textContent = streak;

// Function to set canvas size responsively
function resizeCanvas() {
    const rect = canvas.parentElement.getBoundingClientRect();
    const maxWidth = Math.min(rect.width - 20, 500);
    canvas.width = maxWidth;
    canvas.height = maxWidth * (150 / 500); // Maintain aspect ratio
}

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

// Define single-stroke letter paths (relative coordinates, scaled to fit a box)
// Each letter is an array of strokes, each stroke is an array of [x, y] points
const letterPaths = {
    'A': [[[0.5, 0], [0, 1]], [[0.5, 0], [1, 1]], [[0.2, 0.6], [0.8, 0.6]]],
    'B': [[[0, 0], [0, 1]], [[0, 0], [0.7, 0], [0.9, 0.15], [0.9, 0.35], [0.7, 0.5], [0, 0.5]], [[0, 0.5], [0.7, 0.5], [0.9, 0.65], [0.9, 0.85], [0.7, 1], [0, 1]]],
    'C': [[[1, 0.2], [0.7, 0], [0.3, 0], [0, 0.3], [0, 0.7], [0.3, 1], [0.7, 1], [1, 0.8]]],
    'D': [[[0, 0], [0, 1]], [[0, 0], [0.6, 0], [1, 0.3], [1, 0.7], [0.6, 1], [0, 1]]],
    'E': [[[1, 0], [0, 0], [0, 1], [1, 1]], [[0, 0.5], [0.7, 0.5]]],
    'F': [[[1, 0], [0, 0], [0, 1]], [[0, 0.5], [0.7, 0.5]]],
    'G': [[[1, 0.2], [0.7, 0], [0.3, 0], [0, 0.3], [0, 0.7], [0.3, 1], [0.7, 1], [1, 0.7], [1, 0.5], [0.5, 0.5]]],
    'H': [[[0, 0], [0, 1]], [[1, 0], [1, 1]], [[0, 0.5], [1, 0.5]]],
    'I': [[[0.2, 0], [0.8, 0]], [[0.5, 0], [0.5, 1]], [[0.2, 1], [0.8, 1]]],
    'J': [[[0.2, 0], [0.8, 0]], [[0.5, 0], [0.5, 0.8], [0.3, 1], [0.1, 0.9]]],
    'K': [[[0, 0], [0, 1]], [[1, 0], [0, 0.5], [1, 1]]],
    'L': [[[0, 0], [0, 1], [1, 1]]],
    'M': [[[0, 1], [0, 0], [0.5, 0.5], [1, 0], [1, 1]]],
    'N': [[[0, 1], [0, 0], [1, 1], [1, 0]]],
    'O': [[[0.5, 0], [0.15, 0.15], [0, 0.5], [0.15, 0.85], [0.5, 1], [0.85, 0.85], [1, 0.5], [0.85, 0.15], [0.5, 0]]],
    'P': [[[0, 1], [0, 0], [0.7, 0], [1, 0.15], [1, 0.35], [0.7, 0.5], [0, 0.5]]],
    'Q': [[[0.5, 0], [0.15, 0.15], [0, 0.5], [0.15, 0.85], [0.5, 1], [0.85, 0.85], [1, 0.5], [0.85, 0.15], [0.5, 0]], [[0.6, 0.7], [1, 1.1]]],
    'R': [[[0, 1], [0, 0], [0.7, 0], [1, 0.15], [1, 0.35], [0.7, 0.5], [0, 0.5]], [[0.5, 0.5], [1, 1]]],
    'S': [[[1, 0.15], [0.7, 0], [0.3, 0], [0, 0.15], [0, 0.35], [0.3, 0.5], [0.7, 0.5], [1, 0.65], [1, 0.85], [0.7, 1], [0.3, 1], [0, 0.85]]],
    'T': [[[0, 0], [1, 0]], [[0.5, 0], [0.5, 1]]],
    'U': [[[0, 0], [0, 0.7], [0.3, 1], [0.7, 1], [1, 0.7], [1, 0]]],
    'V': [[[0, 0], [0.5, 1], [1, 0]]],
    'W': [[[0, 0], [0.25, 1], [0.5, 0.5], [0.75, 1], [1, 0]]],
    'X': [[[0, 0], [1, 1]], [[1, 0], [0, 1]]],
    'Y': [[[0, 0], [0.5, 0.5], [1, 0]], [[0.5, 0.5], [0.5, 1]]],
    'Z': [[[0, 0], [1, 0], [0, 1], [1, 1]]]
};

// Calculate total path length for a letter
function getPathLength(strokes) {
    let total = 0;
    for (const stroke of strokes) {
        for (let i = 1; i < stroke.length; i++) {
            const dx = stroke[i][0] - stroke[i-1][0];
            const dy = stroke[i][1] - stroke[i-1][1];
            total += Math.sqrt(dx * dx + dy * dy);
        }
    }
    return total;
}

// Draw a letter with partial progress
function drawLetter(letter, x, y, width, height, progress) {
    const strokes = letterPaths[letter];
    if (!strokes) return;

    const totalLength = getPathLength(strokes);
    const targetLength = progress * totalLength;
    let drawnLength = 0;

    ctx.beginPath();

    for (const stroke of strokes) {
        if (drawnLength >= targetLength) break;

        let strokeStarted = false;

        for (let i = 1; i < stroke.length; i++) {
            const x1 = x + stroke[i-1][0] * width;
            const y1 = y + stroke[i-1][1] * height;
            const x2 = x + stroke[i][0] * width;
            const y2 = y + stroke[i][1] * height;

            const dx = stroke[i][0] - stroke[i-1][0];
            const dy = stroke[i][1] - stroke[i-1][1];
            const segmentLength = Math.sqrt(dx * dx + dy * dy);

            if (drawnLength + segmentLength <= targetLength) {
                // Draw full segment
                if (!strokeStarted) {
                    ctx.moveTo(x1, y1);
                    strokeStarted = true;
                }
                ctx.lineTo(x2, y2);
                drawnLength += segmentLength;
            } else {
                // Draw partial segment
                const remaining = targetLength - drawnLength;
                const ratio = remaining / segmentLength;
                const px = x1 + (x2 - x1) * ratio;
                const py = y1 + (y2 - y1) * ratio;

                if (!strokeStarted) {
                    ctx.moveTo(x1, y1);
                    strokeStarted = true;
                }
                ctx.lineTo(px, py);
                drawnLength = targetLength;
                break;
            }
        }
    }

    ctx.stroke();
}

function drawText(progress) {
    // progress is 0 to 1
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const isMobile = canvas.width < 400;
    const letterHeight = isMobile ? 40 : 60;
    const letterWidth = isMobile ? 30 : 45;
    const spacing = isMobile ? 5 : 8;

    const totalWidth = currentWord.length * letterWidth + (currentWord.length - 1) * spacing;
    let startX = (canvas.width - totalWidth) / 2;
    const startY = (canvas.height - letterHeight) / 2;

    ctx.strokeStyle = '#667eea';
    ctx.lineWidth = isMobile ? 2 : 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    for (let i = 0; i < currentWord.length; i++) {
        const letter = currentWord[i];
        const x = startX + i * (letterWidth + spacing);
        drawLetter(letter, x, startY, letterWidth, letterHeight, progress);
    }
}

function animate(currentTime) {
    if (!gameStartTime) {
        gameStartTime = currentTime;
    }

    const elapsed = currentTime - gameStartTime;
    const progress = Math.min(elapsed / gameDuration, 1);

    // Update timer
    const timeRemaining = Math.max(0, Math.ceil((gameDuration - elapsed) / 1000));
    timerDiv.textContent = timeRemaining;
    timerFill.style.width = ((1 - progress) * 100) + '%';

    drawText(progress);

    if (progress < 1 && gameActive) {
        animationFrameId = requestAnimationFrame(animate);
    } else if (progress >= 1 && gameActive) {
        gameActive = false;
        endGame(false);
    }
}

function startNewGame() {
    currentWord = getRandomWord();
    gameActive = true;
    gameStartTime = 0;
    messageDiv.textContent = '';
    messageDiv.className = 'message';
    gameOverDiv.textContent = '';
    wordRevealDiv.textContent = '';
    guessInput.value = '';
    guessInput.disabled = false;
    guessInput.focus();
    newGameBtn.parentElement.style.display = 'none';

    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }

    animationFrameId = requestAnimationFrame(animate);
}

function endGame(won) {
    gameActive = false;
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }

    guessInput.disabled = true;

    if (won) {
        gameOverDiv.textContent = 'YOU WIN!';
        messageDiv.textContent = 'Correct!';
        messageDiv.className = 'message success';
        wins++;
        streak++;
        localStorage.setItem('wins', wins);
        localStorage.setItem('streak', streak);
    } else {
        gameOverDiv.textContent = 'Game Over';
        messageDiv.textContent = 'You did not guess in time';
        messageDiv.className = 'message error';
        losses++;
        streak = 0;
        localStorage.setItem('losses', losses);
        localStorage.setItem('streak', streak);
    }

    wordRevealDiv.textContent = currentWord;
    newGameBtn.parentElement.style.display = 'flex';

    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;
    document.getElementById('streak').textContent = streak;
}

function checkGuess() {
    if (!gameActive) return;

    const guess = guessInput.value.trim().toUpperCase();

    if (!guess) {
        messageDiv.textContent = 'Please enter a guess';
        messageDiv.className = 'message info';
        return;
    }

    if (guess === currentWord) {
        endGame(true);
    } else {
        messageDiv.textContent = 'Wrong guess, try again!';
        messageDiv.className = 'message error';
        guessInput.value = '';
        guessInput.focus();
    }
}

guessBtn.addEventListener('click', checkGuess);

guessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkGuess();
    }
});

newGameBtn.addEventListener('click', startNewGame);

// Handle window resize for responsive canvas
window.addEventListener('resize', resizeCanvas);
window.addEventListener('orientationchange', resizeCanvas);

// Initialize canvas size and start the first game
resizeCanvas();
startNewGame();
