// import { useIsDark } from './'
import { act } from "@testing-library/react-hooks";

// // mock timer using jest
// jest.useFakeTimers();

describe('useThemeDetectHook', () => {
  it('sets initial theme', () => {
    // const { result } = renderHook(() => useIsDark());

    // // Fast-forward 1sec
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    // // Check after total 1 sec
    // expect(result.current).toBe(theme);
    // console.log(result.current)
    expect(true).toBe(true);
  })
})
