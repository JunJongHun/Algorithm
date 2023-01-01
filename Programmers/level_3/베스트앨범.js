function solution(genres, plays) {
  let answer = [];

  const map = new Map();

  genres
    .map((genre, i) => [genre, plays[i]])
    .forEach(([genre, play], number) => {
      let data = map.get(genre);

      if (!map.has(genre))
        map.set(genre, { sum: play, list: [[play, number]] });
      else
        map.set(genre, {
          sum: data.sum + play,
          list: [...data.list, [play, number]]
            .sort((a, b) => b[0] - a[0])
            .slice(0, 2),
        });
    });

  return [...map]
    .sort((a, b) => b[1].sum - a[1].sum)
    .flatMap((v) => v[1].list)
    .flatMap((v) => v[1]);
}

const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];

console.log(solution(genres, plays));
