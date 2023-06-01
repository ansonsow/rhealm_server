# rhealm_server

If you're not in the `rhealm_server` directory, `cd rhealm_server` to get there.

`npm install`

Download the `.env` file from Slack ([...slack.com/archives/C057W8B9KLP/p1685478014583459](https://langara-coding.slack.com/archives/C057W8B9KLP/p1685478014583459)) and place it in the root of the `rhealm_server` folder.

If it somehow becomes a `env` file instead of `.env`, add a `.` to it.

`npm run dev`

Once that's running, go to http://localhost:8000/api/v1/test.
You should be able to see data from the database:

<img width="369" alt="image" src="https://github.com/ansonsow/rhealm_server/assets/25330392/c31cbfdf-52a3-4137-b939-c2130d64f9d2">

Once this is confirmed, move on to [the front-end part](https://github.com/ansonsow/rhealm#readme).
