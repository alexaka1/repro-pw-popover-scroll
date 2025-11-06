import './style.css'

const app = document.querySelector('#app')

app.innerHTML = `
  <main class="page">
    <section class="page-content">
      <h1>Popover Sidebar Demo</h1>
      <p>
        Click the button to open a sidebar-style popover. The sidebar contains long,
        scrollable content and another anchored popover trigger at the bottom.
      </p>
      <button
        id="sidebar-toggle"
        class="sidebar-toggle"
        type="button"
        popovertarget="sidebar-popover"
        popovertargetaction="toggle"
      >
        Open Sidebar
      </button>
    </section>

    <div id="sidebar-popover" popover="auto" class="sidebar-popover">
      <div class="sidebar-inner">
        <h2>Sidebar Details</h2>
        <p>
          This sidebar popover is intentionally packed with content so it extends beyond
          the height of the viewport. Scroll through it to reach the secondary popover
          trigger anchored at the bottom.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra, nisl
          vel convallis cursus, nunc eros suscipit lacus, quis vestibulum magna nisi id
          tellus. Cras in fermentum enim, ac vulputate enim.
        </p>
        <p>
          Proin vulputate neque felis, in luctus turpis posuere quis. Sed semper neque ac
          porttitor tincidunt. Aliquam erat volutpat. Mauris tincidunt tristique arcu, sit
          amet faucibus justo viverra ac. Suspendisse potenti.
        </p>
        <p>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Vivamus vitae quam vitae sapien malesuada auctor et a ante. Integer
          gravida pretium enim, sed congue magna hendrerit id. Nullam eget dui ut nisi
          feugiat aliquet.
        </p>
        <p>
          Curabitur ultrices erat id nisi imperdiet, a volutpat justo elementum. Fusce
          auctor lorem non neque luctus lacinia. Phasellus feugiat mauris non ligula
          iaculis bibendum.
        </p>
        <p>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Vivamus vitae quam vitae sapien malesuada auctor et a ante. Integer
          gravida pretium enim, sed congue magna hendrerit id. Nullam eget dui ut nisi
          feugiat aliquet.
        </p>
        <p>
          Curabitur ultrices erat id nisi imperdiet, a volutpat justo elementum. Fusce
          auctor lorem non neque luctus lacinia. Phasellus feugiat mauris non ligula
          iaculis bibendum.
        </p>

        <div class="sidebar-spacer" aria-hidden="true"></div>

        <button
          id="nested-popover-trigger"
          class="nested-popover-trigger"
          type="button"
          popovertarget="nested-popover"
          popovertargetaction="toggle"
        >
          Open anchored popover
        </button>

        <div
          id="nested-popover"
          class="nested-popover"
          popover="auto"
        >
          <button type="button" class="hello-button">Hello 1</button>
          <button type="button" class="hello-button">Hello 2</button>
          <button type="button" class="hello-button">Hello 3</button>
          <button type="button" class="hello-button">Hello 4</button>
          <button type="button" class="hello-button">Hello 5</button>
        </div>
        <div class="sidebar-spacer" aria-hidden="true"></div>
        <p>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Vivamus vitae quam vitae sapien malesuada auctor et a ante. Integer
          gravida pretium enim, sed congue magna hendrerit id. Nullam eget dui ut nisi
          feugiat aliquet.
        </p>
        <p>
          Curabitur ultrices erat id nisi imperdiet, a volutpat justo elementum. Fusce
          auctor lorem non neque luctus lacinia. Phasellus feugiat mauris non ligula
          iaculis bibendum.
        </p>
        <p>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Vivamus vitae quam vitae sapien malesuada auctor et a ante. Integer
          gravida pretium enim, sed congue magna hendrerit id. Nullam eget dui ut nisi
          feugiat aliquet.
        </p>
        <p>
          Curabitur ultrices erat id nisi imperdiet, a volutpat justo elementum. Fusce
          auctor lorem non neque luctus lacinia. Phasellus feugiat mauris non ligula
          iaculis bibendum.
        </p>
      </div>
    </div>
  </main>
`
