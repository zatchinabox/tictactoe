export const getStats = () => new Promise((resolve, reject) => {
    try {
        if(localStorage.hasOwnProperty("stats")){
            resolve(JSON.parse(localStorage.getItem("stats")));
        }
        resolve({
            player1Wins: 0,
            player2Wins: 0,
            draws: 0,
        });
    } catch (err) {
        reject(err);
    }
});

export const updateStats = (result) => new Promise((resolve, reject) => {
    try {
        let stats = {
            player1Wins: 0,
            player2Wins: 0,
            draws: 0,
        }
        if(localStorage.hasOwnProperty("stats"))
            stats = JSON.parse(localStorage.getItem("stats"));
       
        if(result === "X"){
            stats.player1Wins++;
        } else if(result === "O"){
            stats.player2Wins++;
        } else {
            stats.draws++;
        }
        localStorage.setItem("stats", JSON.stringify(stats));
        resolve(stats);
    } catch (err) {
        reject(err);
    }
});