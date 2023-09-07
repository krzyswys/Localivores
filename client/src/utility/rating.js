export const getRatingLabel = (rating) => {
    if (rating === 5) return { label: "Excellent!", color: "#008000" }; // green
    if (rating >= 4 && rating < 5) return { label: "Good!", color: "#9ACD32" }; // yellowgreen
    if (rating >= 3 && rating < 4) return { label: "Average", color: "#A39000" }; // rgb(163, 144, 0) converted to hex
    if (rating >= 2 && rating < 3) return { label: "Bad", color: "#FFA500" }; // orange
    if (rating >= 1 && rating < 2) return { label: "Very Bad", color: "#FF0000" }; // red
    return { label: "The Worst!", color: "#8B0000" }; // darkred
}

