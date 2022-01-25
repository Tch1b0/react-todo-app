import { FC, useState } from "react";

// The properties of the Todo component
interface props {
    // The name of the Todo
    name: string;

    // Callback to remove the Todo from the list
    remove: () => void;
}

/*
 * A single Todo component
 */
export const Todo: FC<props> = ({ name, remove }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <>
            <div>
                <p
                    className="todo"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    style={{ position: "relative" }}>
                    {name}
                    {hovered ? (
                        <button
                            style={{ right: "5px", position: "absolute" }}
                            onClick={remove}>
                            X
                        </button>
                    ) : (
                        <></>
                    )}
                </p>
            </div>
        </>
    );
};
