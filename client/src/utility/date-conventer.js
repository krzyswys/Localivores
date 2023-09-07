const convertDate = (dateStr) => {
    const [day, month, year] = dateStr.split('.');
    return `${year}-${month}-${day}`;
};

export default convertDate;