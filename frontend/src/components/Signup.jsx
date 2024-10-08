
function Signup() {
  /**
   * Need to make API call to update the active split
   * 1. Get the active split details i.e. splitid, split status, eggcount
   * 2. Add your split details in splitusers collection
   * 3. Schema (splitid, username, email, count, lastupdatedon)
   * 4. Update the count accordingly on split collection document based on splitid
   */

  return (
    <div className="signup-page">
      <h2>Add your count</h2>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="eggcount">Your count:</label>
          <input type="number" id="eggcount" name="eggcount" required />
        </div>
        <button type="submit" className="btn">Add count</button>
      </form>
    </div>
  )
}
export default Signup