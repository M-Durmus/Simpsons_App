import React from 'react';
import { render, cleanup, fireEvent, screen, waitFor, getByText, findByText } from '@testing-library/react';
import ListItem from '../components/ListItem.js';
import { SimpsonsContext } from '../context/SimpsonsContext.js';
import App from '../App.js';
import userEvent from  '@testing-library/user-event';

afterEach(cleanup)
let mockNavigate;
jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom')),
    useNavigate: () => mockNavigate,
}));


const props = {
    simpson: {
        avatar: "https://static.wikia.nocookie.net/simpsons/images/1/12/Abbey_Tapped_Out.png/revision/latest/scale-to-width-down/176?cb=20191211083031",
        description: "Abbey (possibly Abigail or Abbey Simpson)is the daughter of Edwina, a woman with whom Abraham Simpson briefly had a relationship while he was stationed in England during World War II. It is insinuated that Abbey is the result of that relationship, which would make her Abe's daughter and Homer's half-sister. She very much looks and acts similar to Homer.",
        id: "57",
        job: "Housewife",
        name: "Abbey"
    },
    index: 5,
}
it('Goes to  detail page when ListItem clicked', async () => {
    render(<App>
        <SimpsonsContext.Provider>
            <ListItem {...props} />
        </SimpsonsContext.Provider>
    </App>);
    await  screen.findByText("Abbey");

    userEvent.click(screen.getByText("Abbey"))



    // expect(mockNavigate('/' + props.simpson.id)).toBeCalledWith(`/${props.simpson.id}`)




    // expect(screen.getByText(/Housewife/i)).toBeInTheDocument()

})


// it('button click changes props', () => {
//     const { getByText } = render(<App>
//         <TestHook />
//     </App>)

//     expect(getByText(/Moe/i).textContent).toBe("Moe")

//     fireEvent.click(getByText("Change Name"))

//     expect(getByText(/Steve/i).textContent).toBe("Steve")
// })
