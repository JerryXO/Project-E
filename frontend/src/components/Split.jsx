
function Split() {
  /**
   * 1. Need to make API call to create a split
   * 2. Create a split with schema (splitid, split status, username, email, eggcount, createdon)
   * 3. Store in split collection
   */

  return (
    <div className="signup-page">
      <h2>Split</h2>
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
          <label htmlFor="eggcount">Total eggs:</label>
          <input type="number" id="eggcount" name="eggcount" required />
        </div>
        <button type="submit" className="btn">Split eggs</button>
      </form>
    </div>
  )
}
export default Split