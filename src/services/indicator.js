const types = ['PM2.5', 'AQI', 'PM2.5_NASA', 'Temperature', 'Humidity'];

const units = {
    'PM2.5': 'μg/m3',
    'AQI': '',
    'PM2.5_NASA': 'μg/m3',
    'Temperature': '&#8451;',
    'Humidity': '%',
};

const colors = {
    'AQI': [
        { min:0, max: 15, color:'#00FF00' },
        { min:16, max: 35, color:'#FFFF00' },
        { min:36, max: 54, color:'#FF7E00' },
        { min:55, max: 150, color:'#FF0000' },
        { min:151, max: 250, color:'#00FF00' },
        { min:251, max: 300, color:'#800080' },
        { min:300, max: Infinity , color:'#7E0023' },
    ],
    'PM2.5': [
        { min:0, max: 11, color:'#9CFF9C' },
        { min:12, max: 23, color:'#31FF00' },
        { min:24, max: 35, color:'#31CF00' },
        { min:36, max: 41, color:'#FFFF00' },
        { min:42, max: 47, color:'#FFCF00' },
        { min:48, max: 53, color:'#FF9A00' },
        { min:54, max: 58, color:'#FF6464' },
        { min:59, max: 64, color:'#990000' },
        { min:65, max: 70, color:'#990000' },
        { min:71, max: Infinity, color:'#CE30FF' },
    ],
    'PM2.5_NASA': [
        { min:0, max: 3, color:'#0000CC' },
        { min:4, max: 5, color:'#0133CC' },
        { min:6, max: 8, color:'#0166FF' },
        { min:9, max: 10, color:'#0099FF' },
        { min:11, max: 13, color:'#32CBFE' },
        { min:14, max: 15, color:'#65FE9A' },
        { min:16, max: 18, color:'#99FF66' },
        { min:19, max: 20, color:'#CCFF33' },
        { min:21, max: 35, color:'#FFFF01' },
        { min:36, max: 50, color:'#FF9933' },
        { min:51, max: 65, color:'#FF3301' },
        { min:66, max: 80, color:'#C90000' },
        { min:81, max: Infinity, color:'#800000' },
    ],
    'Temperature': [
        { min:0, max: 5, color:'#6DB2CC' },
        { min:6, max: 11, color:'#B9E6F6' },
        { min:16, max: 15, color:'#4BAC66' },
        { min:22, max: 21, color:'#A8D784' },
        { min:22, max: 25, color:'#F0E389' },
        { min:26, max: 29, color:'#F1B040' },
        { min:30, max: 33, color:'#F55042' },
        { min:34, max: 35, color:'#B6023C' },
        { min:36, max: 37, color:'#9F66B5' },
        { min:38, max: Infinity, color:'#752B8E' },
    ],
    'Humidity': [
        { min:0, max: 20, color:'#FAC090' },
        { min:21, max: 40, color:'#76B531' },
        { min:41, max: 60, color:'#B7DEE8' },
        { min:61, max: Infinity, color:'#215968' },
    ],
};


export const isTypeExist = (type) => {
    return types.indexOf(type) > -1;
}

export const getUnit = (type) => {
    return isTypeExist(type) ? units[type] : null;
}

export const getSupportTypes = () => {
    return types;
}

export const getTypeColors = type => {
    return isTypeExist(type) ? colors[type] : null;
}

export const getTypeColor = (type, value) => {
    const colors = getTypeColors(type);

    if (!colors) { return null; }

    var level = colors.filter(function(level) {
        return value >= level.min && value <= level.max;
    });

    return level.length ? level.pop().color : null;
}