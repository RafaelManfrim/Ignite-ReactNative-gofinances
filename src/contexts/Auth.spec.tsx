import { renderHook, act } from "@testing-library/react-hooks"
import { createMock } from 'ts-jest-mock'

import { AuthContextProvider, useAuth } from "./AuthContext"
import * as AuthSession from "expo-auth-session"

jest.mock('expo-auth-session')

describe("Auth Hook", () => {
  it("should be able to sign in with Google account existing", async () => {
    const googleMocked = createMock(AuthSession.startAsync as any)
    googleMocked.mockResolvedValue({
      type: 'success',
      params: {
        access_token: 'fake-google-token'
      }
    })

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

    expect(result.current.user.email).toBe('fake-email')
  })

  it('user should not connect if cancel authentication with google', async () => {
    const googleMocked = createMock(AuthSession.startAsync as any)
    googleMocked.mockResolvedValue({
      type: 'cancel',
    })

    const { result } = renderHook(() => useAuth(), { wrapper: AuthContextProvider })

    await act(() => result.current.signInWithGoogle())

    expect(result.current.user.id).not.toHaveProperty('id')
  })
})