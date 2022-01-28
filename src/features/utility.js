

export const convertUnixTime = (number) => {   // Converts unix time to human readable
    const ms = number * 1000;
    const dateObject = new Date(ms);
    const hrDate = dateObject.toLocaleString();
    return hrDate.slice(0, -3); // Removes seconds, retains date
}