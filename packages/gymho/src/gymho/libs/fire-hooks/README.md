```js
import { FirebaseProvider, useDatabase } from "@react-firebase/hooks";

function UserBookmarks() {
  const { isLoading, value, ref } = useDatabase({
    path: "user_bookmarks/",
    limitToFirst: 2
  });
  return <pre>{JSON.stringify({ isLoading, value }, null, 2)}</pre>;
}

function App() {
  return (
    <FirebaseProvider firebase={firebase} {...config}>
      <UserBookmarks />
    </FirebaseProvider>
  );
}
```