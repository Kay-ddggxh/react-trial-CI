import React from 'react'

function UserMessage(props) {
  return (
    <div>
        	{props.isLoggedIn ? (
					<div>
						<p>Welcome. Please complete these steps:</p>
						<ol>
							<li>Confirm your email</li>
							<li>Confirm your profile</li>
							<li>Subscribe to the newsletter</li>
						</ol>
					</div>
				) : (
					<p>Please sign in!</p>
				)}
    </div>
  )
}

export default UserMessage