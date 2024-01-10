import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Admin Portal" },
    { name: "description", content: "Welcome to Admin Portal!" },
  ];
};

export default function Admin() {
  return (
    <div>

    </div>
  );
}