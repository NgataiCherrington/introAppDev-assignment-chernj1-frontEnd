<script>
  let { form } = $props();
</script>

<h1>Register</h1>

<form method="POST" action="?/register">
  <label for="firstName">First Name</label>
  <input
    id="firstName"
    name="firstName"
    type="text"
    value={form?.firstName ?? ""}
    placeholder="Enter First Name"
  />

  <label for="lastName">Last Name</label>
  <input
    id="lastName"
    name="lastName"
    type="text"
    value={form?.lastName ?? ""}
    placeholder="Enter Last Name"
  />

  <label for="email">Email Address</label>
  <input
    id="email"
    name="email"
    type="email"
    value={form?.email ?? ""}
    placeholder="Enter Email"
  />

  <label for="dob">Date of Birth</label>
  <input
    type="date"
    id="dob"
    name="dob"
    value={form?.dob ?? ""}
    required
  />

  <label for="password">Password</label>
  <input
    id="password"
    name="password"
    type="password"
    value={form?.password ?? ""}
    placeholder="Enter Password"
  />

  <label for="phoneNumber">Phone Number</label>
  <input
    type="tel"
    id="phoneNumber"
    name="phoneNumber"
    value={form?.phoneNumber ?? ""}
    placeholder="Enter Phone Number"
  />

  <label for="role">Role</label>
  <select name="role" id="role">
    <option value="ADMIN" selected={form?.role === "ADMIN"}>Admin</option>
    <option value="NORMAL" selected={form?.role === "NORMAL"}>Normal</option>
  </select>
  <button type="submit">Submit</button>
</form>

{#if form?.success}
  <p>{form.message}</p>
{/if}

{#if form?.success === false}
  <p>{form.error}</p>
{/if}
