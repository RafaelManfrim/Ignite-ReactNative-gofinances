import { renderHook, act } from "@testing-library/react-hooks"
import { AuthContextProvider, useAuth } from "./AuthContext"

jest.mock('expo-auth-session', () => {
  return {
    startAsync: () => {
      return {
        type: 'success',
        params: {
          access_token: 'fake-google-token'
        }
      }
    }
  }
})

describe("Auth Hook", () => {
  it("should be able to sign in with Google account existing", async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({
        id: 'fake-id',
        email: 'fake-email',
        name: 'fake-name',
        photo: 'fake-photo'
      })
    })) as jest.Mock

    const { result } = renderHook(() => useAuth(), { wrapper: AuthContextProvider })

    await act(() => result.current.signInWithGoogle())

    expect(result.current.user).toBeTruthy()
  })
})