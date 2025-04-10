function bonAppetit(bill, k, b) {
    const fairShare = bill.reduce((sum, item, index) => 
        index !== k ? sum + item : sum, 0) / 2;
    if (b === fairShare) {
        console.log("Bon Appetit");
    } else {
        console.log(b - fairShare);
    }
}