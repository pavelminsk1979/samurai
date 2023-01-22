import {addedMessageStatetAC, dialogReduсer, initialMessageStateType} from "../redux/reduser/dialogReduсer";
import {
    changeIsLoading,
    followParticipant,
    initialParticipantsStateType,
    participantReduсer
} from "../redux/reduser/participantReduсer";


let startState: initialParticipantsStateType

beforeEach(() => {
    startState = {
        participants: [],
        count: 100,
        totalCount: 0,
        activePage: 1,
        isLoading: false,
        disabled: []
    }
})

test('value isLoading should be true', () => {

    const newValue = true
    const endState = participantReduсer(startState, changeIsLoading(newValue))

    expect(endState.isLoading).toBe(true)

})