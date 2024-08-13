const emailError = document.querySelector("#email-error");
const emailInput = document.querySelector("#email-input");
const subscribeBtn = document.querySelector("#newsletter-btn");

const successState = document.querySelector("#success-state");
const successEmail = document.querySelector("#success-email");
const successStateBtn = document.querySelector("#success-btn");

const subscribeSuccess = (e) => {
	e.preventDefault();
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (re.test(emailInput.value)) {
		successState.classList.remove("hide-alert");
		successState.classList.add("show-alert");
		successEmail.textContent = emailInput.value;
		emailInput.value = "";
		emailError.classList.remove("visibility-visible");
		emailInput.classList.remove("error");
	} else {
		emailError.classList.add("visibility-visible");
		emailInput.classList.add("error");
	}
};

const dismissMsg = (e) => {
	e.preventDefault();
	successState.classList.add("hide-alert");
	successState.classList.remove("show-alert");
};

subscribeBtn.addEventListener("click", subscribeSuccess);
successStateBtn.addEventListener("click", dismissMsg);
