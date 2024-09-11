<!-- IMPORT partials/account/header.tpl -->

<h3 class="fw-semibold fs-5">[[web-push:profile.label]]</h3>

<p>[[web-push:profile.introduction]]</p>

<div class="alert alert-warning d-none" id="permission-warning">[[web-push:profile.permissionBlocked]]</div>

<form role="form">
	<div class="form-check form-switch">
		<input type="checkbox" class="form-check-input" id="enabled" name="enabled" autocomplete="off" data-action="toggle">
		<label for="enabled" class="form-check-label">[[web-push:profile.option]]</label>
		<p class="form-text" id="deviceCount">[[web-push:profile.devices, {count}]]</p>
	</div>
</form>

<!-- IMPORT partials/account/footer.tpl -->