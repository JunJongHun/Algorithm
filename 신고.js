let id_list = ["muzi", "frodo", "apeach", "neo"];
let report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
let k = 2;

let answer = [];
let user_map = new Map();
let user_answer_map = new Map();

for (const user of id_list) {
  user_map.set(user, 0);
  user_answer_map.set(user, 0);
}

for (let reported_user of new Set(report)) {
  reported_user = reported_user.split(" ")[1];
  user_map.set(reported_user, user_map.get(reported_user) + 1);
}

for (const user of report) {
  let [key, value] = user.split(" ");
  if (user_map.get(value) >= k) {
    user_answer_map.set(key, user_answer_map.get(key) + 1);
  }
}

for (const i of user_answer_map.values()) {
  answer.push(i);
}
console.log(answer);
