<?php get_header();?>

		<main>
			<section class="section">
				<div class="container">
					<h2>Typography</h2>
					<div class="paper">
						<div class="paper__inner">
							<h1>Heading h1</h1>
							<h2>Heading h2</h2>
							<h3>Heading h3</h3>
							<h4>Heading h4</h4>
							<h5>Heading h5</h5>
							<h6>Heading h6</h6>
							<hr />
							<p>
								<b>Lorem ipsum dolor</b> sit amet consectetur adipisicing elit.
								Nobis quo eos delectus enim
								<abbr title="HyperText Markup Language">HTML</abbr>
								exercitationem ratione dolores, reprehenderit laborum ducimus
								eaque. Porro, soluta. Quis a autem voluptates amet veniam nam,
								maiores consectetur aspernatur sit
								<b>this is bold text</b> vitae enim perspiciatis esse ex aliquid
								ipsam sapiente aperiam magnam animi sint! Fuga, dolorum? Nostrum
								odio asperiores ratione? <mark>this is mark</mark> eaque dicta!
								Hic laborum amet ea ducimus mollitia earum nemo possimus vero
								aut, accusamus odio aliquid obcaecati numquam omnis alias
								repellat. Voluptas, neque quibusdam? Recusandae, porro! Deserunt
								quisquam porro sint alias quas eius rem facere delectus ipsa ex
								impedit totam quia, laborum, eaque
								<a href="#">recusandae exercitationem</a> eum vero
								<strong>strong text</strong> magnam, rerum cumque. Veritatis
								eligendi nemo consequatur totam maiores, nostrum dignissimos
								illo impedit et error nulla reiciendis eaque doloribus!
							</p>
							<hgroup>
								<h1>Calculus I</h1>
								<h2>Fundamentals</h2>
							</hgroup>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Reprehenderit, praesentium dolorum. Nihil saepe, alias,
								voluptatibus quibusdam dolores delectus provident, eaque sed
								porro quasi amet ipsa?Lorem, ipsum dolor sit amet consectetur
								adipisicing <del>wlit.</del><ins>elit.</ins> Soluta facere
								aliquam recusandae dolores laborum repellendus, cumque
								temporibus excepturi debitis ea quod animi quas doloribus
								perspiciatis natus, quam, rerum aperiam facilis? Lorem ipsum
								dolor sit amet consectetur adipisicing elit. <kbd>Ctrl</kbd> +
								<kbd>Shift</kbd> + <kbd>R</kbd> Laboriosam repudiandae, optio
								beatae blanditiis voluptatem quisquam aliquid atque autem, est
								accusantium et nostrum dignissimos distinctio, similique sit
								minus aliquam sunt quos.
							</p>
							<blockquote>
								<p>
									It was a bright cold day in April, and the clocks were
									striking thirteen.
								</p>
								<footer>
									First sentence in
									<cite
										><a href="http://www.george-orwell.org/1984/0.html"
											>Nineteen Eighty-Four</a
										></cite
									>
									by George Orwell (Part 1, Chapter 1).
								</footer>
							</blockquote>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Reprehenderit, praesentium dolorum. Nihil saepe, alias,
								voluptatibus quibusdam dolores delectus provident, eaque sed
								porro quasi amet ipsa?Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Soluta facere aliquam recusandae dolores
								laborum repellendus, cumque temporibus excepturi debitis ea quod
								animi quas doloribus perspiciatis natus, quam, rerum aperiam
								facilis?Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Laboriosam repudiandae, optio beatae blanditiis voluptatem
								quisquam aliquid atque autem, est accusantium et nostrum
								dignissimos distinctio, similique sit minus aliquam sunt quos.
							</p>
							<figure>
								<img
									loading='lazy'
									class="lazy"
									data-src="https://picsum.photos/id/237/480/240"
									width="480"
									height="240"
									alt=""
								/>
								<figcaption>An elephant at sunset</figcaption>
							</figure>
							<pre>
								body {
									color: red;
								}
							</pre
							>

							<h3>Unordered List</h3>
							<ul>
								<li>Milk</li>
								<li>
									Cheese
									<ul>
										<li>Blue cheese</li>
										<li>Feta</li>
									</ul>
								</li>
							</ul>

							<p>Cryptids of Cornwall:</p>
							<dl>
								<dt>Beast of Bodmin</dt>
								<dd>A large feline inhabiting Bodmin Moor.</dd>

								<dt>Morgawr</dt>
								<dd>A sea serpent.</dd>

								<dt>Owlman</dt>
								<dd>A giant owl-like creature.</dd>
							</dl>

							<h3>Ordered List</h3>
							<ol>
								<li>Mix flour, baking powder, sugar, and salt.</li>
								<li>In another bowl, mix eggs, milk, and oil.</li>
								<li>Stir both mixtures together.</li>
								<li>Fill muffin tray 3/4 full.</li>
								<li>Bake for 20 minutes.</li>
							</ol>
						</div>
					</div>
				</div>
			</section>
			<section class="section">
				<div class="container">
					<h2>Form / Inputs</h2>
					<div class="paper">
						<div class="paper__inner">
							<form>
								<fieldset name="Example Form">
									<div class="form-group">
										<label for="name">Full Name</label>
										<input
											type="text"
											name="name"
											id="name"
											placeholder="John Adams"
											required
										/>
									</div>
									<div class="form-group">
										<label for="email">Email</label>
										<input
											type="email"
											name="email"
											id="email"
											placeholder="john@example.com"
										/>
									</div>
									<div class="form-group">
										<label for="textarea">Textarea</label>
										<textarea
											id="textarea"
											name="textarea"
											rows="5"
											cols="33"
										></textarea>
									</div>
									<div class="form-group">
										<label for="exampleFormControlSelect1"
											>Example select</label
										>
										<select class="form-control" id="exampleFormControlSelect1">
											<option>1</option>
											<option>2</option>
											<option>3</option>
											<option>4</option>
											<option>5</option>
										</select>
									</div>
									<div class="form-group">
										<label for="exampleFormControlSelect2"
											>Example multiple select</label
										>
										<select
											multiple
											class="form-control"
											id="exampleFormControlSelect2"
										>
											<option>1</option>
											<option>2</option>
											<option>3</option>
											<option>4</option>
											<option>5</option>
										</select>
									</div>
								</fieldset>
								<button class="button button--secondary" type="submit">
									Submit
								</button>
							</form>
							<h3>Progress</h3>
							<label for="file">File progress:</label>
							<progress id="file" max="100" value="70">70%</progress>
						</div>
					</div>
				</div>
			</section>
			<section class="section">
				<div class="container">
					<h2>Buttons</h2>
					<div class="paper">
						<div class="paper__inner">
							<h3>Button Element</h3>
							<button>Default Button</button>
							<button type="button" class="button">Button w/ Class</button>
							<button type="button" class="button button--primary">
								Button w/ Class
							</button>
							<button type="button" class="button button--secondary">
								Button w/ Class
							</button>
							<h3>Anchor Links as Buttons</h3>
							<a href="#" class="button button--small" role="button">Small</a>
							<a href="#" class="button button--primary" role="button"
								>Default</a
							>
							<a
								href="#"
								class="button button--secondary button--large"
								role="button"
								>Large</a
							>
						</div>
					</div>
				</div>
			</section>

			<section class="section">
				<div class="container">
					<h2>Tables</h2>
					<div class="paper">
						<div class="paper__inner">
							<table class="data" id="selector-examples">
								<colgroup>
								 <col class="pattern">
								 <col class="meaning">
								 <col class="section">
								 <col class="level">
								</colgroup>
								<thead>
									<tr>
										<th>Pattern</th>
										<th>Represents</th>
										<th>Section</th>
										<th>Level</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td><code>*</code></td>
										<td>any element</td>
										<td><a href="#the-universal-selector">§ 5.2 Universal selector</a></td>
										<td>2</td>
									</tr>
									<tr>
										<td><code>E</code></td>
										<td>an element of type E</td>
										<td><a href="#type-selectors">§ 5.1 Type (tag name) selector</a></td>
										<td>1</td>
									</tr>
								</tbody>
								<tbody>
								 <tr>
									<td><code>E:not(<var>s1</var>, <var>s2</var>, …)</code>
									</td><td>an E element that does not match either <a data-link-type="dfn" href="#compound" id="ref-for-compound">compound selector</a> <var>s1</var> or <span id="ref-for-compound①">compound selector</span> <var>s2</var>
									</td><td><a href="#negation">§ 4.3 The Negation (Matches-None) Pseudo-class: :not()</a>
									</td><td>3/4
								 </td></tr><tr>
									<td><code>E:is(<var>s1</var>, <var>s2</var>, …)</code>
									</td><td>an E element that matches <a data-link-type="dfn" href="#compound" id="ref-for-compound②">compound selector</a> <var>s1</var> and/or <span id="ref-for-compound③">compound selector</span> <var>s2</var>
									</td><td><a href="#matches">§ 4.2 The Matches-Any Pseudo-class: :is()</a>
									</td><td>4
								 </td></tr><tr>
									<td><code>E:where(<var>s1</var>, <var>s2</var>, …)</code>
									</td><td>an E element that matches <a data-link-type="dfn" href="#compound" id="ref-for-compound④">compound selector</a> <var>s1</var> and/or <span id="ref-for-compound⑤">compound selector</span> <var>s2</var> but contributes no specificity.
									</td><td><a href="#zero-matches">§ 4.4 The Specificity-adjustment Pseudo-class: :where()</a>
									</td><td>4
								 </td></tr><tr>
									<td><code>E:has(<var>rs1</var>, <var>rs2</var>, …)</code>
									</td><td>an E element,
											if either of the <a data-link-type="dfn" href="#relative-selector" id="ref-for-relative-selector">relative selectors</a> <var>rs1</var> or <var>rs2</var>,
											when evaluated with E as the <a data-link-type="dfn" href="#scope-element" id="ref-for-scope-element">:scope elements</a>,
											match an element
									</td><td><a href="#relational">§ 4.5 The Relational Pseudo-class: :has()</a>
									</td><td>4
								</td></tr></tbody>
							</table>
						</div>
					</div>
				</div>
			</section>

		</main>

<?php get_footer(); ?>
